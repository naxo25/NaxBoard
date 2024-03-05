import { router } from '../router.js'
import { supabase } from './supabase.js'
import Store from './store.js'

export const signOut = async () => {
  router.push('/login')
  await supabase.auth.signOut()
  localStorage.identifier = ''
}

export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error)
    return

  // location.reload()
}

const getUsers = async email => {
  const { data, error } = await supabase
    .from('users')
    .select('space, image')
    .eq('email', email) // Filters

    if (error) {
      return
    }

    const { space, image } = data[0]

    Store.spaces = space;
    const findSpace = space.find(item => item === localStorage.identifier) 

    if (findSpace) {
      console.log("findSpace", findSpace)
      getSpace(localStorage.identifier)
    } else {
      localStorage.identifier = ''
    }

    const { data: responseS, error: errorS } = await supabase.from('space').select().in('identifier', space)

    if (errorS) {
      return
    }

    responseS.forEach((item, id) => {
      const { identifier, logo, countTasks } = item
      Store.spaces[id] = { identifier, logo, countTasks }
    })

    Store.user = {
      image: image || './noimg.webp'
    }
    Store.loader = false
}

let noReload = false
export const onHandle = async () => {
  const { data, error } = await supabase.from('app_updates')
    .select()
    .eq('app_name', 'NaxBoard')

  const updateVersion = data[0].update;

  if (localStorage.updateVersion !== updateVersion) {
    location.reload()
    localStorage.updateVersion = updateVersion
  }

  supabase.auth.onAuthStateChange(async (event, session) => {
    if (noReload)
      return

    if (!session) {
      router.push('/login')
    //   login({ email: 'test@gmail.com', password: '123zxcoag82nasd' })
      return
    }

    getUsers(session.user.email)
    noReload = true
  })
};

export const getSpace = async identifier => {
  Store.loader = true
  // router.push('/space/' + space.identifier)
  localStorage.identifier = identifier

  // if (noRemplaceTasks.value)
  //   return

  // order('last_update', { ascending: false })
  // Antes

  const { data: response, error } = await supabase.from('space')
    .select()
    .eq('identifier', identifier)
    // .order('last_update') //.limit(limit.value)
  
  // const response = Store.spaces.find(a => a.identifier === identifier)

  if (!response) {
    Store.tasks = []
  } else {
    Store.tasks = response[0].tasks;
  }

  Store.selectSpace = identifier
  setTimeout(() => {
    Store.loader = false
  }, 250)
}
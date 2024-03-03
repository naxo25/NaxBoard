import { router } from '../router.js'
import { supabase } from './supabase.js'
import Store from './store.js'

export const signOut = async () => {
  router.push('/login')
  await supabase.auth.signOut()
  localStorage.space = ''
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
    .select('space')
    .eq('email', email) // Filters

    if (error) {
      return
    }

    Store.spaces = data[0].space;
    const localSpace = data[0].space[0]
    // localStorage.space ? JSON.parse(localStorage.space) : 
    const validatelocalSpace = async () => await data[0].space.find(item => item === localSpace.identifier) 

    if (await validatelocalSpace()) {
    } else {
      localStorage.space = ''
      router.push('/')
    }

    const { data: responseS, error: errorS } = await supabase.from('space').select().in('identifier', data[0].space)

    if (errorS) {
      return
    }

    responseS.forEach((item, id) => {
      const { identifier, logo, countTasks } = item
      Store.spaces[id] = { identifier, logo, countTasks }
    })

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
  console.log("identifier", identifier)
  Store.loader = true
  router.push('/')
  // router.push('/space/' + space.identifier)
  // localStorage.space = JSON.stringify(space)

  // if (noRemplaceTasks.value)
  //   return

  // order('last_update', { ascending: false })
  // Antes

  const { data: response, error } = await supabase.from('space')
    .select()
    .eq('identifier', identifier)
    // .order('last_update') //.limit(limit.value)
  
  // const response = Store.spaces.find(a => a.identifier === identifier)
  console.log("response", response)

  if (!response) {
    Store.tasks = []
  } else {
    Store.tasks = response[0].tasks;
  }
    console.log("Store.tasks", Store.tasks)

  Store.selectSpace = identifier
  setTimeout(() => {
    Store.loader = false
  }, 250)
}
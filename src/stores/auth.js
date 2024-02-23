import { router } from '../router.js'
import { supabase } from './supabase.js'
import Store from './store.js'

export const signOut = async () => {
  await supabase.auth.signOut()
  localStorage.space = ''
  router.push('/login')
}

export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error)
    return

  location.reload()
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
    console.log("Store.spaces", Store.spaces)

    const localSpace = data[0].space[0]
    console.log("localSpace", localSpace)
    // localStorage.space ? JSON.parse(localStorage.space) : 
    const validatelocalSpace = async () => await data[0].space.find(item => item === localSpace.identifier) 

    getSpace(localSpace)
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
export const onHandle = () => {
  supabase.auth.onAuthStateChange(async (event, session) => {
    if (noReload)
      return

    console.log("session", session)
    if (!session) {
      login({ email: 'test@gmail.com', password: '123zxcoag82nasd' })
      return
    }

    getUsers(session.user.email)
    noReload = true
  })
};

export const getSpace = async space => {
  console.log("space", space)
  Store.loader = true
  // router.push('/space/' + space.identifier)
  // localStorage.space = JSON.stringify(space)

  // if (noRemplaceTasks.value)
  //   return

  // order('last_update', { ascending: false })
  const { data: response, error } = await supabase.from('tasks')
    .select()
    .eq('name', space)
    .order('last_update') //.limit(limit.value)

  console.log("response", response)
  if (error) {
    if (!import.meta.env.DEV)
      // router.push('/')
    return
  }

  if (!response.length) {
    Store.tasks = []
    Store.docs = []
  } else {
    Store.tasks = response[0].subtasks;
    Store.docs = response[0].docs;
  }

  Store.selectSpace = space
  setTimeout(() => {
    Store.loader = false
  }, 250)
}
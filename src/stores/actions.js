import { router } from '@/router'
import { supabase } from './supabase.js'
import Store from './store.js'

export const getSubTasks = (position, route) => {
  Store.TaskSelectPos = position
  router.push(`/${route}/` + position)
}

export const addTask = async (task, mode) => {

  if (mode === 'Task')
    Store.tasks[Store.tasks.length] = { ...task, subTasks: [] };

  if (mode === 'SubTask') {
    if (!Store.tasks[Store.TaskSelectPos].subTasks)
      Store.tasks[Store.TaskSelectPos].subTasks = []

    Store.tasks[Store.TaskSelectPos].subTasks.push({ ...task })
  }

  console.log("Store.tasks", Store.tasks)

  const { data, error } = await supabase
    .from('space')
    .update({ tasks: Store.tasks })
    .eq('identifier', Store.selectSpace)
    .select()

  if (error)
    Notification('Ha ocurrido un error', error)

  Notification('Se ha agregado la tarea.')
}

export const updateTasks = async task => {

  if (!Store.tasks[Store.TaskSelectPos].subTasks)
    Store.tasks[Store.TaskSelectPos].subTasks = []

  // console.log("task", task)
  // console.log("Store.tasks", Store.tasks)

  const { data, error } = await supabase
    .from('space')
    .update({ tasks: Store.tasks })
    .eq('identifier', Store.selectSpace)
    .select()

  if (error)
    Notification('Ha ocurrido un error', error)

  Notification('Se ha actualizado la tarea.')
}
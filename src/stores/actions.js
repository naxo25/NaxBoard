import { router } from '@/router'
import { supabase } from './supabase.js'
import Store from './store.js'

export const getSubTasks = position => {
  Store.TaskSelectPos = position
  router.push('/task/' + position)
}
import { reactive } from 'vue'
const store = reactive({
  spaces: [],
  loader: true,
  tasks: [],
  selectSpace: 'NaxBoard'
})
export default store
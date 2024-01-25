import { reactive } from 'vue'
const store = reactive({
  spaces: [],
  loader: true,
  tasks: [],
  selectSpace: {
    'identifier': '',
    'logo': 'https://nacholabraweb.000webhostapp.com/ico.png',
    'countTasks': 0
  }
})
export default store
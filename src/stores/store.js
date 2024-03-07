import { reactive } from 'vue'
const store = reactive({
  spaces: [],
  loader: false,
  tasks: [],
  user: {
    image: './noimg.webp'
  },
  selectSpace: 'NaxBoard'
})
export default store
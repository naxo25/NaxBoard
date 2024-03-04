import { reactive } from 'vue'
const store = reactive({
  spaces: [],
  loader: true,
  tasks: [],
  user: {
    image: './noimg.webp'
  },
  selectSpace: 'NaxBoard'
})
export default store
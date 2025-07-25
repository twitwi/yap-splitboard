//import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSimpleStore = defineStore('simple', () => {
  // like setup() in a component
  //const userName = ref('bob')
  return { /*userName*/ }
},
  {
    persist: { key: 'yap-splitboard:local' }, // persisted in localStorage
  }
)


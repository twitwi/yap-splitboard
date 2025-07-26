import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSimpleStore = defineStore('simple', () => {
  const spec = ref('')
  return { spec }
},
  {
    persist: { key: 'yap-splitboard:local' }, // persisted in localStorage
  }
)


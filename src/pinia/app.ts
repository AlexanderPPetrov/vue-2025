import { defineStore } from "pinia";
import { ref } from 'vue'

export const useAppStore = defineStore('app', ()=> {
    const theme = ref<string>('light')

    function setTheme(newTheme: string) {
        theme.value = newTheme
    }
    
    return { theme, setTheme }
})
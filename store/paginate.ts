import {defineStore} from "pinia";
import {ref} from "vue"

export const paginateStore = defineStore('paginateData', () => {
    // state
    const paginateCurrent = ref(1)
    // actions
    const SET_PAGINATE = (current: number) =>{
        paginateCurrent.value = current
    }
    const NEXT_PAGE = () =>{
        paginateCurrent.value++
    }
    const PREV_PAGE = () =>{
        paginateCurrent.value--
    }

    // getters
    return {SET_PAGINATE,NEXT_PAGE,PREV_PAGE,paginateCurrent}
},)

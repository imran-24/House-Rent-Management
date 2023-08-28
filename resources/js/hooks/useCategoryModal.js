import {create} from 'zustand'


const useCategoryModal = create((set)=>({
    isOpen: false,
    onClose: ()=> set({isOpen: false}),
    onOpen: ()=> set({isOpen: true})
}))

export default useCategoryModal
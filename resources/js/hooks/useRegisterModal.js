import {create} from 'zustand'


const useRegisterModal = create((set)=>({
    isOpen: false,
    onClose: ()=> set({isOpen: false}),
    onOpen: ()=> set({isOpen: true})
}))

export default useRegisterModal
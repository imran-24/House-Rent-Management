import {create} from 'zustand'


const useLoginModal = create((set)=>({
    isOpen: false,
    onClose: ()=> set({isOpen: false}),
    onOpen: ()=> set({isOpen: true})
}))

export default useLoginModal
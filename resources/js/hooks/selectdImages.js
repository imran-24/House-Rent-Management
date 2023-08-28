import {create} from 'zustand'


const selectedImages = create((set)=>({
    images: [],
    onSelect: (newValue) => {
    set((state) => ({
      images: [...state.images, newValue],
    }));
  }
}))

export default selectedImages
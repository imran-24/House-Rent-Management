
import selectedImages from '@/hooks/selectdImages';
import {useState, useCallback, useEffect} from 'react'
import { useDropzone } from 'react-dropzone';
import { BiTrash } from 'react-icons/bi';
import { PiTrashLight } from 'react-icons/pi';
import { TbPhotoPlus } from 'react-icons/tb';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageUpload = ({
    value, disabled, label, onChange, onRemove
}) => {
  const [files, setFiles] = useState(value.length ? value : [])
  // const [images, setimages] = useState(value.length ? value : [])

  const {images, onSelect} = selectedImages()

  const handleDrop = useCallback((files)=>{

    files.map((file) => {
      const url = URL.createObjectURL(file);
      onSelect(url)
      setFiles((prev) => [...prev, file])
    })
  //     setimages((prevBase64) => [...prevBase64, file]);
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setBase64((prevBase64) => [...prevBase64, e.target.result]);
        
  //     };
  //     reader.readAsDataURL(file);
  //   });
        
    
  },[])


  // const handleDrop = useCallback((files) => {

  //   files.map((file) => {
  //     setimages((prevBase64) => [...prevBase64, file]);
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setBase64((prevBase64) => [...prevBase64, e.target.result]);
        
  //     };
  //     reader.readAsDataURL(file);
  //   });
    
  // }, [setBase64, onChange]);

  useEffect(()=>{
    if(files.length) onChange(files)
  },[files])

  const { getRootProps, getInputProps } = useDropzone({ 
    maxFiles: 5, 
    onDrop: handleDrop, 
    disabled,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    } 
  });

  return (
    <div {...getRootProps({className: 'w-full border-2 border-dashed flex flex-colitems-center justify-center max-h-[300px]  rounded-lg cursor-pointer transition relative border-neutral-300 relative z-10'})}>
      <input {...getInputProps()} />
      {images?.length ? (
        <div className="flex items-center h-[260px] justify-center ">
          <Carousel
          className='w-[220px]  z-50'
          showArrows={true}
          showIndicators={true}
          showThumbs={false}
          infiniteLoop={true}
          stopOnHover={true}
          showStatus={false}>
            {
              images?.map((image, index) =>(
                <div key={index} className='relative h-full w-full'>
                  <img src={image} className='w-full h-[200px] rounded-lg z-50 object-cover' />
                  <div className='
                    absolute 
                    bottom-2 
                    left-2
                    z-50
                    '>
                    <button 
                    // type='button'
                    // size='icon'
                    // variant='destructive'
                    // onClick={()=> onCancel(value)}
                    className='bg-rose-500 p-2 rounded-lg'
                    >
                    <BiTrash 
                    className='w-4 h-4 fill-white'
                    />
                    </button>
                  </div>
                </div>
              ))
            }

          </Carousel>
          
        </div>
      ) : (
            <div className='flex flex-col items-center justify-center h-full py-24'>
                <TbPhotoPlus />
                <div className='text-sm'>
                    {label}
                </div>
            </div>
      )}
        {/* <div 
        onClick={()=> onRemove('')}
        className='absolute top-3 z-50 right-3 h-8 w-8 bg-rose-500 rounded-lg flex items-center justify-center'>
            <PiTrashLight className='fill-white' size={20} />
        </div> */}
    </div>
  )
}

export default ImageUpload
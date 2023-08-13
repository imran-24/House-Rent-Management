import axios from 'axios'

export const getListings = async()=>{
    try{  
      const listings = await axios.get('listings');
      console.log(listings.data)
      return listings.data;
    }
    catch(error){
        console.log(error)
    }
}
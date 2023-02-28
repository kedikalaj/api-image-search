import axios from "axios";

const searchImages = async (userQuery)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos/',{
        headers:{
            Authorization:'Client-ID 9aJ0z7kUENCAWJ7plfEgVYlVdUKiTW_Dqc_FnSSvibQ',
        },
        params: {
            query:userQuery,
        },
    });
   
    return response.data.results;
}


export default searchImages;
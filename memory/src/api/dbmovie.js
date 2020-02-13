import axios from 'axios';

const API_KEY = '2ee2c5b569240ea2a2a879dd9c8a822c';

export default (keyword)=> {
    return axios.get('https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query='+keyword)
        .then((response)=>{
            console.log('first',response);
            return response.data;
        })
        .catch((err)=> {
          console.log(err);
        })

}

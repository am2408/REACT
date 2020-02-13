import axios from 'axios';

export function getPhotos(){
  return axios.get('https://jsonplaceholder.typicode.com/photos')
  .then((response)=>{
    console.log(response.data);
    console.log('test');
    return response.data;
  })
  .catch((error)=>{
    console.log(error);
    // return error;
  })
}

import axios from 'axios';
// const baseUrl = 'localhost:3000/@/data/';
const baseUrl = "http://rap2api.taobao.org/app/mock/223152/";
export default {
  reqGetData (url) {
    return new Promise ((resolve,reject) => {
      axios.get(baseUrl + url).then(res => {
        resolve(res.data.data)
        console.log(res.data.data)
      })
    }) 
  }
}
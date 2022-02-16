import Axios from 'axios';
import {baseURL} from './config.service';

export const postScoreAxios = async (bodyReq) => {
    try{
        Axios({
            method: 'post',
            url: `${baseURL}/score`,
            data: bodyReq,
            headers: {"Content-Type": "application/json"}
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            alert(error.response.data.message);
          });
    }catch(error){
        console.log(error)
    }
}
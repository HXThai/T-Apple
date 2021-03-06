import axios from 'axios';
import storage from '../Screen/asyncStorage/Storage';

const callApiService = {
  get: async (url, body) => {
    let authorization = await storage.getItem('Authorization');
    // console.log(url, body);
    return axios({
      method: 'get',
      url: url,
      data: body,
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
    })
      .then(function (response) {
        // console.log(response);
        if (response) {
          return response;
        } else return null;
      })
      .catch(function (error) {
        console.log('error get : ', error);
      });
  },
  post: async (url, body) => {
    // console.log(url, '-', body);
    console.log('body', body);
    let authorization = await storage.getItem('Authorization');
    return axios({
      method: 'post',
      url: url,
      data: body,
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization ? authorization : '',
      },
    })
      .then(function (response) {
        // console.log('reaaaa post: ', response);
        if (response) {
          return response;
        } else return null;
      })
      .catch(function (error) {
        console.log('error post: ' + JSON.stringify(error));
      });
  },
};

export default callApiService;

import axios from 'axios';

const callApiService = {
  get: async (url, body) => {
    // console.log(url, body);
    return axios({
      method: 'get',
      url: url,
      data: body,
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
    console.log(url, '-', body);
    return axios({
      method: 'post',
      url: url,
      data: body,
      // headers: {
      //   Authorization: `${token}`,
      //   // Authorization: JSON.stringify(token),
      // },
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

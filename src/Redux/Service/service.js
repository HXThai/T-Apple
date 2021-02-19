import {API_BASE_URL, ROOT_DOMAIN} from '../../Constants/url.constant';
import callApiService from '../../utils/callAPI.service';

const service = {
  getListService: async (params) => {
    let url = `${API_BASE_URL.GET_LIST_SERVICE}?category_id=${params.id}`;
    let response = callApiService.get(url, params);
    // console.log(params);
    return response;
  },
  getListServiceDetail: async (params) => {
    let url = `${ROOT_DOMAIN}/service/${params}/detail`;
    let response = callApiService.get(url);
    return response;
  },
  getCategoriesService: async (params) => {
    let url = `${API_BASE_URL.GET_LIST_CATEGORY}`;
    let response = callApiService.get(url);
    return response;
  },
  getListServiceHighlight: async (params) => {
    let url = `${API_BASE_URL.GET_LIST_SERVICE_HIGHLIGHT}&limit=${params.limit}`;
    let response = callApiService.get(url);
    return response;
  },
};

export default service;

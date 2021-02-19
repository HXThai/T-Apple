const ACTION_GET_SERVICE = '[SERVICE] ACTION_SERVICE';
const getService = (params) => {
  return {
    type: ACTION_GET_SERVICE,
    payload: params,
  };
};

const ACTION_GET_SERVICE_SUCCESS = '[SERVICE] ACTION_SERVICE_SUCCESS';
const getServiceSuccess = (response) => {
  return {
    type: ACTION_GET_SERVICE_SUCCESS,
    payload: response,
  };
};

const ACTION_GET_SERVICE_FAILD = '[SERVICE] ACTION_SERVICE_FAILD';
const getServiceFaild = (response) => {
  return {
    type: ACTION_GET_SERVICE_FAILD,
    payload: response,
  };
};

const ACTION_GET_CATEGORIES_SERVICE = '[SERVICE] ACTION_GET_CATEGORIES_SERVICE';
const getCategoriesService = (params) => {
  return {
    type: ACTION_GET_CATEGORIES_SERVICE,
    payload: params,
  };
};

const ACTION_GET_CATEGORIES_SERVICE_SUCCESS =
  '[SERVICE] ACTION_GET_CATEGORIES_SERVICE_SUCCESS';
const getCategoriesServiceSuccess = (response) => {
  return {
    type: ACTION_GET_CATEGORIES_SERVICE_SUCCESS,
    payload: response,
  };
};

const ACTION_GET_CATEGORIES_SERVICE_FAILD =
  '[SERVICE] ACTION_GET_CATEGORIES_SERVICE_FAILD';
const getCategoriesServiceFaild = (response) => {
  return {
    type: ACTION_GET_CATEGORIES_SERVICE_FAILD,
    payload: response,
  };
};

export {
  ACTION_GET_SERVICE,
  getService,
  ACTION_GET_SERVICE_SUCCESS,
  getServiceSuccess,
  ACTION_GET_SERVICE_FAILD,
  getServiceFaild,
  ACTION_GET_CATEGORIES_SERVICE,
  getCategoriesService,
  ACTION_GET_CATEGORIES_SERVICE_SUCCESS,
  getCategoriesServiceSuccess,
  ACTION_GET_CATEGORIES_SERVICE_FAILD,
  getCategoriesServiceFaild,
};

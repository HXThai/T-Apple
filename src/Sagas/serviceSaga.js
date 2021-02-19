import services from '../Redux/Service/service';
import {put, call, takeLatest} from 'redux-saga/effects';
import * as actions from '../Redux/Action/serviceAction';
import * as actions_highlightAction from '../Redux/Action/service_highlightAction';

export function* getListService(params) {
  try {
    let data = yield call(services.getListService, params.payload);
    yield put(actions.getServiceSuccess(data.data));
  } catch (error) {
    yield put(actions.getServiceFaild(error.message));
  }
}

export function* getCategoriesService(params) {
  try {
    let data = yield call(services.getCategoriesService, params.payload);
    yield put(actions.getCategoriesServiceSuccess(data.data));
  } catch (error) {
    yield put(actions.getCategoriesServiceFaild(error.message));
  }
}

export function* getListServiceHighlight(params) {
  try {
    let data = yield call(services.getListServiceHighlight, params.payload);
    yield put(actions_highlightAction.getServiceHighLightSuccess(data.data));
  } catch (error) {
    yield put(actions_highlightAction.getServiceHighLightFaild(error.message));
  }
}

export function* watchServiceHighlight() {
  yield takeLatest(
    actions_highlightAction.ACTION_GET_SERVICEHIGHLIGHT,
    getListServiceHighlight,
  );
}

export function* watchService() {
  yield takeLatest(actions.ACTION_GET_SERVICE, getListService);
  yield takeLatest(actions.ACTION_GET_CATEGORIES_SERVICE, getCategoriesService);
}

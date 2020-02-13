import {ADD_PRODUCT, DELETE_PRODUCT} from './actions-type';

export function add(lol){
  return function (dispatch){
    dispatch({
      type:ADD_PRODUCT,
      payload:lol
    });
  }
}

export function supp(lol){
  return function (dispatch){
    dispatch({
      type:DELETE_PRODUCT,
      payload:lol
    });
  }
}

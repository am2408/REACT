import {ADD_PRODUCT, DELETE_PRODUCT} from '../actions/actions-type';

const init = {
  basket:[]
}

export default function basket(state = init, action){
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        basket: action.payload
      }
      break;
      case DELETE_PRODUCT:
        return {
          ...state,
          basket: action.payload
        }
        break;
    default:
      return state;
  }
}

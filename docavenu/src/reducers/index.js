import { combineReducers } from "redux";
import BasketReducer from './basketReducer';


const total = combineReducers({
    basket: BasketReducer
});

export default total;

import {combineReducers} from "redux";
import CountReducer from './countReducer'


const root = combineReducers({
  chiffre:CountReducer
});

export default root;

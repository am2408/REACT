import {AJOUT} from './actions-type';

export const add=(nombre)=>{
  return function (lol){
    lol({
      type:AJOUT,
      nimp:nombre
    });
  }
}

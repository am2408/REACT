import {AJOUT} from '../actions/actions-type';

const ini={
  chiffre:0
}

export default function AuthentificationReducer(state = ini, action) {
	switch(action.type) {

		case AJOUT:
			console.log('ton action récupéré du reducer', action)
      return {
  ...state,
  chiffre: action.nimp

}
  default:
  return state;
}
}

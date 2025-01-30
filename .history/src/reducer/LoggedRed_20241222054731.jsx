// import { LOGIN, LOGOUT } from "../actions/action";

import { LOGIN, LOGOUT } from "../actions/action";


const initialState = {
	isLoggedIn: false,
};

const Logreducer = (state = initialState, action) => {
	if(action.type === LOGIN){
		return {isLoggedIn: true};
	}
	else
}






// const initialState = {
// 	isLoggedIn: false,
// };

// const Logreducer = (state = initialState, action) => {
// 	if (action.type === LOGIN) {
// 		return { isLoggedIn: true };
// 	} else if (action.type === LOGOUT) {
// 		return { isLoggedIn: false };
// 	}
// 	return state;
// };

// export default Logreducer;


import { SIGN_IN, SIGN_OUT } from "./actions";

const initialState = {
    isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
    if (action.type === SIGN_IN) {
        return { isLoggedIn: true };
    } else if (action.type === SIGN_OUT) {
        return { isLoggedIn: false };
    }
    return state;
};

export default authReducer;

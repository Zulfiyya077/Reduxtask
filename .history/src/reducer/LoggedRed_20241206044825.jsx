import { SIGN_IN, SIGN_OUT } from "./actions";

const initialState = {
    isLoggedIn: false,
    message: "Daxil olmadınız",
};

const authReducer = (state = initialState, action) => {
    if (action.type === SIGN_IN) {
        return {
            isLoggedIn: true,
            message: "Daxil edildiniz",
        };
    } else if (action.type === SIGN_OUT) {
        return {
            isLoggedIn: false,
            message: "Daxil olmadınız",
        };
    }
    return state;
};

export default authReducer;

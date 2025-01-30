import { SIGN_IN, SIGN_OUT } from "./action";

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

import { LOGIN, LOGOUT } from "./action";

// Başlanğıc vəziyyəti
const initialState = {
    isLoggedIn: false, // Başlanğıcda istifadəçi daxil deyil
};

// Reducer funksiyası
const authReducer = (state = initialState, action) => {
    if (action.type === LOGIN) {
        return {
            ...state,
            isLoggedIn: true, // Giriş edilib
        };
    } else if (action.type === LOGOUT) {
        return {
            ...state,
            isLoggedIn: false, // Giriş edilməyib
        };
    }
    return state; // Başqa bir action tipi varsa, cari vəziyyəti qaytarır
};

export default authReducer;

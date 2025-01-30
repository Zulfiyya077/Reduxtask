export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const signIn = () => ({
    type: SIGN_IN,
});

export const signOut = () => ({
    type: SIGN_OUT,
});
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// Sign In action
export const loginUser = () => ({
    type: LOGIN,
});

// Sign Out action
export const logoutUser = () => ({
    type: LOGOUT,
});

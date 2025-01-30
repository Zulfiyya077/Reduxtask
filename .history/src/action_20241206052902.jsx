
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

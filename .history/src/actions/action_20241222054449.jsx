



export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";


export const loginUser = () => ({
    type: LOGIN,
});

export const logoutUser = () => ({
    type: LOGOUT,
});
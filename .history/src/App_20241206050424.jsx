import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "./actions/action";

const App = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>{isLoggedIn ? "Giriş Edilib" : "Giriş Edilməyib"}</h1>
            <button onClick={() => dispatch(signIn())}>Sign In</button>
            <button onClick={() => dispatch(signOut())}>Sign Out</button>
        </div>
    );
};

export default App;

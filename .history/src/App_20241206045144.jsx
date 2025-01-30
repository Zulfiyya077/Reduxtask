import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "./actions";

const App = () => {
    const dispatch = useDispatch();
    const message = useSelector((state) => state.message);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>{message}</h1>
            <button onClick={() => dispatch(signIn())}>Sign In</button>
            <button onClick={() => dispatch(signOut())}>Sign Out</button>
        </div>
    );
};

export default App;

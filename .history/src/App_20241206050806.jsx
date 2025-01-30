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
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "./actions/action";
import styles from "./App.module.css";

const App = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    return (
        <div className={styles.container}>
            <h1 className={styles.message}>
                {isLoggedIn ? "Giriş Edilib" : "Giriş Edilməyib"}
            </h1>
            <button
                className={`${styles.button} ${styles.signIn}`}
                onClick={() => dispatch(signIn())}
            >
                Sign In
            </button>
            <button
                className={`${styles.button} ${styles.signOut}`}
                onClick={() => dispatch(signOut())}
            >
                Sign Out
            </button>
        </div>
    );
};

export default App;


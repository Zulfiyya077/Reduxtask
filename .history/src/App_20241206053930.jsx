import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "./action";
import styles from "./App.module.css";

const App = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    return (
        <div className={styles.container}>
            <h1 className={styles.message}>
                {isLoggedIn ? "Giriş Edilib" : "Giriş Edilməyib"}
            </h1>
            <div className="">{isLoggedIn ? "😊" : "☹️"}</div>
            <button
                className={`${styles.button} ${styles.signIn}`}
                onClick={() => dispatch(loginUser())} 
            >
                Sign In
            </button>
            <button
                className={`${styles.button} ${styles.signOut}`}
                onClick={() => dispatch(logoutUser())} 
            >
                Sign Out
            </button>
        </div>
    );
};

export default App;

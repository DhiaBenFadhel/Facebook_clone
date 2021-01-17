
import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css'
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';
function Login() {
    const [state ,dispatch] = useStateValue();
    const signIn = () => {
        // sign in...
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="data:image/png;base64,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"
                    alt=""
                />
                 <img
                    src="data:image/png;base64,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"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login

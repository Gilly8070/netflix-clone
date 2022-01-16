import React, { useState } from 'react';
import '../styles/LoginScreen.css';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            
            <div className="loginScreen_background">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className="loginScreen_logo" />
                <button onClick={() => setSignIn(true)} className='loginScreen_button'>Sign In</button>
                <div className="loginScreen_gradient" />
            </div>
            <div className="loginScreen_body">
                {signIn ? (
                    <SignUpScreen />
                ): (
                <>
                    <h1>Unlimited files, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginScreen_input">
                        <form action="">
                            <input type="email" placeholder='Email Address' />
                            <button onClick={() => setSignIn(true)}   className="loginScreen_getStarted">
                                Get Started
                            </button>
                        </form>
                    </div>
                </>
            )}
            </div>
        </div>
    )
}

export default LoginScreen

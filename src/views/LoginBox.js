import React from 'react';
import Logo from './logo/Logo';
import './login-box-style.css';
import WelcomeText from './welcome/WelcomeText';
import OnlineUsers from './online-users/OnlineUsers';
import ButtonsWrapper from './buttons-wrapper/ButtonsWrapper';
import InputWrapper from './inputs-wrapper/InputWrapper';
import ErrorMessage from './error-message/ErrorMessage';

export default class LoginBox extends React.Component {

    constructor(props) {
        super(props);
        this.welcomeTextWidget = React.createRef();
        this.inputWrapper = React.createRef();
        this.errorMessage = React.createRef();
    }


    render() {
        return (
            <div className="main-login-page">
                <div className="item login">
                    <div className="login-box">
                        <Logo />
                        
                        <WelcomeText ref={this.welcomeTextWidget}  />
                        <OnlineUsers />
                        <ErrorMessage ref={this.errorMessage} />
                        <InputWrapper ref={this.inputWrapper} />
                        <ButtonsWrapper errorMessage={this.errorMessage} inputWrapper={this.inputWrapper} />
                    </div>
                </div>
            </div>
        );
    }
}


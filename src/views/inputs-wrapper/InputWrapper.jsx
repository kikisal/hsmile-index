import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LoginComponent from '../login-component/LoginComponent';
import RecoveryPasswordComponent from '../recovery-password/RecoveryPasswordComponent';
import RegisterComponent from '../register-component/RegisterComponent';

export default class InputWrapper extends React.Component {


    constructor(props) {
        super(props)
    
        this.loginComponent = React.createRef();
        this.registerComponent = React.createRef();
        this.recoveryComponent = React.createRef();
        
    }
    


    render() {
        return (
            <Switch>
                <Route path="/recovery">
                    <RecoveryPasswordComponent ref={this.recoveryComponent} />
                </Route>
                <Route path="/register">
                    <RegisterComponent ref={this.registerComponent} />
                </Route>
                <Route path="/">
                    <LoginComponent ref={this.loginComponent} />
                </Route>
            </Switch>
        )
    }
}

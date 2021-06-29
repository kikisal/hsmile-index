import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Button from '../../button/Button';
import Bottom from '../bottom/Bottom';
// import './login-button-wrapper.css';

export default class ButtonsWrapper extends React.Component {
    
    loginIn = () => {
        const {username, password} = this.
        props.inputWrapper.
        current.loginComponent.
        current.inputs;
        
        
       
        
        const name = username.value;
        const pass = password.value;

        const formData = new FormData();
        formData.append('user', name);
        formData.append('pass', pass);
        
        
       fetch('/api/login', {
            method : 'POST',
            body: formData,
     
        }).then(e => {

            e.json().then( (e) => {
             
                if ( e.status === 'success' ) {
                    window.location.reload();
                }
                else
                   alert( 'Nome o password errata' );
            }  ).catch(e => {
                console.error('Errore interno', e);
            })
        });

        
    }

    createAccount = () => {
        
    }

    componentDidMount() {
        window.addEventListener('keydown', e => {
            if ( e.keyCode === 13 )
                this.loginIn();
        })
    }
    
    render() {
        return (
            <div className="buttons-wrapper">
                <Switch>
                    <Route path="/" exact={true}>
                        <Button onClick={this.loginIn}  label='Accedi' />
                    </Route>
                    <Route path="/index" exact={true}>
                        <Button onClick={this.loginIn}  label='Accedi' />
                    </Route>
                    <Route exact={true} path="/register">
                        <Button onClick={this.createAccount} label='Registrati' />
                    </Route>
                    <Route exact={true} path="/recovery">
                        <Button disable={true} label='Recupera' />
                    </Route>
                    
                </Switch>
                
                <Bottom />
            </div>
        )
    }
}

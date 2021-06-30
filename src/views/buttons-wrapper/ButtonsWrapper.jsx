import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Button from '../../button/Button';
import Bottom from '../bottom/Bottom';
// import './login-button-wrapper.css';
import Config from './../../config';

const TEXTS = {
    SOMETHING_WENT_WRONG: 'Qualcosa è andato storto, riprova.',
    FILL_UP_FIELDS: 'Riempi tutti i campi.',
    PASSWORD_OR_NAME_WRONG: 'Nome o password errata.'
};

export default class ButtonsWrapper extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            disable_button: false,
        }
    }

    loginIn = () => {
        const {username, password} = this.
        props.inputWrapper.
        current.loginComponent.
        current.inputs;
        
        const { errorMessage } = this.props;
       
        errorMessage.current.clear();
        
        const name = username.value;
        const pass = password.value;


        errorMessage.current.loading();

        this.setState({disable_button: true});

        if ( name == '' || pass == '' )
        {

            this.setState({disable_button: false}, () => {

                errorMessage.current.handleMessage(TEXTS.FILL_UP_FIELDS);

            });

            return;
        }


        const formData = new FormData();
        formData.append('user', name);
        formData.append('pass', pass);
        
        
       fetch(`${Config.API_SERVICE}/api/login`, {
            method : 'POST',
            body: formData,
     
        }).then(e => {

            e.json().then( (e) => {
                
                this.setState({disable_button: false}, () => {
                    if ( !('status' in e) ) {
                        errorMessage.current.handleMessage(TEXTS.SOMETHING_WENT_WRONG);
                    } else {
                        if ( e.status === 'success' )
                            window.location.reload();
                        else
                            errorMessage.current.handleMessage(TEXTS.PASSWORD_OR_NAME_WRONG);
                    }    
                });
                
            }  ).catch(e => {
                this.setState({disable_button: false}, () => {
                    errorMessage.current.handleMessage(TEXTS.SOMETHING_WENT_WRONG);
                }); 
            })
        }).catch(e => {
            this.setState({disable_button: false}, () => {
                errorMessage.current.handleMessage(TEXTS.SOMETHING_WENT_WRONG);
            });
        });

        
    }

    createAccount = () => {
        console.log('CREATING ACCOUNT DIOMERDA....');   
    }

    componentDidMount() {
        window.addEventListener('keydown', e => {

            if ( this.state.disable_button )
                return;

            if ( e.keyCode === 13 )
            {

                const url = new URL(window.location.href);

                switch ( url.pathname.substr(1) ) {
                    case '':
                    case 'index':
                        this.loginIn();                
                       
                    break;
    
                    case 'register':
                        this.createAccount();
                        break;
                }
    
            }
        });
    }

    resetErrorMessage() {
        if ( this.props.errorMessage.current )
            this.props.errorMessage.current.clear();
    }

    render() {
        return (
            <div className="buttons-wrapper">
                <Switch>
                    <Route path="/" exact={true}>
                        <Button disable={this.state.disable_button} wrapper={this} onClick={this.loginIn} label='Accedi' />
                    </Route>
                    <Route path="/index" exact={true}>
                        <Button wrapper={this} onClick={this.loginIn}  label='Accedi' />
                    </Route>
                    <Route exact={true} path="/register">
                        <Button wrapper={this} onClick={this.createAccount} label='Registrati' />
                    </Route>
                    <Route exact={true} path="/recovery">
                        <Button wrapper={this} disable={true} label='Recupera' />
                    </Route>
                    
                </Switch>
                
                <Bottom />
            </div>
        )
    }
}

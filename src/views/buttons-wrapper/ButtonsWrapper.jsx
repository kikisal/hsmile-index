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

    getURI() {
        return new URL(window.location.href).pathname;
    }

    loginIn = () => {
        const {username, password} = this.
        props.inputWrapper.
        current.loginComponent.
        current.inputs;
        
        const { errorMessage } = this.props;
        const uri = this.getURI();

       
        errorMessage.current.clear();
        
        const name = username.value;
        const pass = password.value;


        errorMessage.current.loading();

        this.setState({disable_button: true});

        if ( name == '' || pass == '' )
        {

            this.setState({disable_button: false}, () => {
                errorMessage.current.handleMessage(TEXTS.FILL_UP_FIELDS, uri);
            });

            return;
        }


        const formData = new FormData();
        formData.append('user', name);
        formData.append('pass', pass);
        
        
       fetch(`${Config.API_SERVICE}api/login`, {
            method : 'POST',
            body: formData,
     
        }).then(e => {

            e.json().then( (e) => {
                
                this.setState({disable_button: false}, () => {
                    if ( !('status' in e) ) {
                        errorMessage.current.handleMessage(TEXTS.SOMETHING_WENT_WRONG, uri);
                    } else {
                        if ( e.status === 'success' )
                            window.location.reload();
                        else
                            errorMessage.current.handleMessage(TEXTS.PASSWORD_OR_NAME_WRONG, uri);
                    }    
                });
                
            }  ).catch(e => {
                this.setState({disable_button: false}, () => {
                    errorMessage.current.handleMessage(TEXTS.SOMETHING_WENT_WRONG, uri);
                }); 
            })
        }).catch(e => {
            this.setState({disable_button: false}, () => {
                errorMessage.current.handleMessage(TEXTS.SOMETHING_WENT_WRONG, uri);
            });
        });

        
    }

    createAccount = () => {
        const {username, email, password, password2} = this.
        props.inputWrapper.
        current.registerComponent.
        current.inputs;

        const { errorMessage } = this.props;
        const uri = this.getURI();
       
        errorMessage.current.clear();
        
        
        const [name, mail, pass, pass2] = [username.value, email.value, password.value, password2.value]; 


        errorMessage.current.loading();

        
        this.setState({disable_button: true});

        if ( name == '' || pass == '' )
        {

            this.setState({disable_button: false}, () => {

                errorMessage.current.handleMessage(TEXTS.FILL_UP_FIELDS, uri);

            });

            return;
        }


        const formData = new FormData();
        formData.append('user', name);
        formData.append('mail', mail);
        formData.append('pass', pass);
        formData.append('pass2', pass2);

        fetch(`${Config.API_SERVICE}api/register`, {
            method : 'POST',
            body: formData,

        }).then(e => {

            e.json().then( (e) => {
                
                this.setState({disable_button: false}, () => {
                    if ( !('status' in e) ) {
                        errorMessage.current.handleMessage(TEXTS.SOMETHING_WENT_WRONG, uri);
                    } else {
                        if ( e.status === 'success' )
                            window.location.reload();
                        else
                        {
                            if (!('message' in e))
                                errorMessage.current.handleMessage(TEXTS.SOMETHING_WENT_WRONG, uri);
                            else
                                errorMessage.current.handleMessage(TEXTS.PASSWORD_OR_NAME_WRONG, uri);
                        }
                    }    
                });
                
            }  ).catch(e => {
                this.setState({disable_button: false}, () => {
                    errorMessage.current.handleMessage(TEXTS.SOMETHING_WENT_WRONG, uri);
                }); 
            })
        }).catch(e => {
            this.setState({disable_button: false}, () => {
                errorMessage.current.handleMessage(TEXTS.SOMETHING_WENT_WRONG, uri);
            });
        });

    }
    
    recoveryPassword = () => {
        const { email } = this.
        props.inputWrapper.
        current.recoveryComponent.
        current.inputs;
        
        const { errorMessage } = this.props;
        const uri = this.getURI();

       
        errorMessage.current.clear();
        
        const mail = email.value;

        errorMessage.current.loading();

        this.setState({disable_button: true});

        if ( mail == '' )
        {
            this.setState({disable_button: false}, () => {
                errorMessage.current.handleMessage(TEXTS.FILL_UP_FIELDS, uri);
            });

            return;
        }


        const formData = new FormData();
        formData.append('mail', mail);
        
        fetch(`${Config.API_SERVICE}api/register`, {
            method : 'POST',
            body: formData,

        }).then(e => {

            e.json().then( (e) => {
                
                this.setState({disable_button: false}, () => {
                    if ( !('status' in e) ) {
                        errorMessage.current.handleMessage(TEXTS.SOMETHING_WENT_WRONG, uri);
                    } else {
                        if ( e.status === 'success' )
                            window.location.reload();
                        else
                        {
                            if (!('message' in e))
                                errorMessage.current.handleMessage(TEXTS.SOMETHING_WENT_WRONG, uri);
                            else
                                errorMessage.current.handleMessage(TEXTS.PASSWORD_OR_NAME_WRONG, uri);
                        }
                    }    
                });
                
            }  ).catch(e => {
                this.setState({disable_button: false}, () => {
                    errorMessage.current.handleMessage(TEXTS.SOMETHING_WENT_WRONG, uri);
                }); 
            })
        }).catch(e => {
            this.setState({disable_button: false}, () => {
                errorMessage.current.handleMessage(TEXTS.SOMETHING_WENT_WRONG, uri);
            });
        });
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

                    case 'recovery':
                        this.recoveryPassword();
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
                        <Button disable={this.state.disable_button} wrapper={this} onClick={this.loginIn}  label='Accedi' />
                    </Route>
                    <Route exact={true} path="/register">
                        <Button disable={this.state.disable_button} wrapper={this} onClick={this.createAccount} label='Registrati' />
                    </Route>
                    <Route exact={true} path="/recovery">
                        <Button disable={this.state.disable_button} wrapper={this} onClick={this.recoveryPassword} label='Recupera' />
                    </Route>
                    
                </Switch>
                
                <Bottom />
            </div>
        )
    }
}

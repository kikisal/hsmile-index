import React from 'react';
import Input from '../input/Input';
import './../inputs-comp.css';

export default class RegisterComponent extends React.Component {

    constructor(props) {
        super(props);

        this.inputs = {
            username: undefined,
            email: undefined,
            password: undefined,
            password2: undefined
        }
    
    }

    render() {
        return (
            <div className="inputs-text opacity">
                <>
                    <Input raw_input_ref={(input) => this.inputs.username = input} lit={true} label="Nome" icon="head" />
                    <Input raw_input_ref={(input) => this.inputs.email = input} label="E-Mail" icon="email" />
                    <Input raw_input_ref={(input) => this.inputs.password = input} type="password" label="Password" icon="lock" />
                    <Input raw_input_ref={(input) => this.inputs.password2 = input} type="password" label="Conferma Password" icon="lock" />   
                </>
            </div>
        );
    }

}

function Maintenance() {
    return (<h2 style={{color: '#b8bdc3'}}>Servizio in costruzione</h2>)
}

function Inputs() {
    return (
        <>
            <Input raw_input_ref={(input) => this.inputs.username = input} lit={true} label="Nome" icon="head" />
            <Input raw_input_ref={(input) => this.inputs.email = input} label="E-Mail" icon="email" />
            <Input raw_input_ref={(input) => this.inputs.password = input} type="password" label="Password" icon="lock" />
            <Input raw_input_ref={(input) => this.inputs.password2 = input} type="password" label="Conferma Password" icon="lock" />
        </>
    )
}
import React from 'react';
import Input from '../input/Input';
import './../inputs-comp.css';

export default class RegisterComponent extends React.Component {

    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <div className="inputs-text opacity">
                <Inputs />
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
            <Input lit={true} label="Nome" icon="head" />
            <Input label="E-Mail" icon="email" />
            <Input type="password" label="Password" icon="lock" />
            <Input type="password" label="Conferma Password" icon="lock" />
        </>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../input/Input';
// import './inputs-comp.css';

export default class LoginComponent extends React.Component {
    
    constructor(props) {
        super(props)
    
        this.inputs = {
            username: undefined,
            password: undefined
        }
    }


    render() {
        return (
            <div className="inputs-text">
                <Input raw_input_ref={(input) => this.inputs.username = input} lit={true} label="Nome" icon="head" />
                <Input raw_input_ref={(input) => this.inputs.password = input} type="password" label="Password" icon="lock">
                    <div className="label link" style={{margin:'10px 0'}}>
                        <Link title="Password dimenticata?" to="/recovery">Password dimenticata?</Link>
                    </div>
                </Input>               
            </div>
        );
    }
}
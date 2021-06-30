import React from 'react'
import Input from '../input/Input';
import './../inputs-comp.css';

const style = {
    width: '100%',
    marginRight: 0
}

export default class RecoveryPasswordComponent extends React.Component {

    constructor(props) {
        super(props);
        this.inputs = {
            email: undefined,
        }
    }

    render() {
        return (
            <div className="inputs-text">
                <Input raw_input_ref={(input) => this.inputs.email = input} style={style} label="E-Mail" icon="email" />
            </div>
        )
    }
}

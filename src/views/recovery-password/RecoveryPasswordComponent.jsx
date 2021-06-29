import React from 'react'
import Input from '../input/Input';
import './../inputs-comp.css';

const style = {
    width: '100%',
    marginRight: 0
}

export default class RecoveryPasswordComponent extends React.Component {
    render() {
        return (
            <div className="inputs-text">
                <Input disable={true} style={style} label="E-Mail" icon="email" />
            </div>
        )
    }
}

import React from 'react';

export default class Input extends React.Component {

    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    
    componentDidMount() {
        if ( this.props.lit )
            this.focus();

        if ( this.props.raw_input_ref )
            this.props.raw_input_ref(this.input.current);
    }

    focus() {
        if ( this.input.current )
            this.input.current.focus();
    }

    render() {
        return (
            <div style={this.props.style} className="input">
                <div className="label"><span>{this.props.label}</span></div>
                <div className={`icon ${this.props.icon} input-icon`}></div>
                <input className={this.props.disable ? 'disable' : ''} ref={this.input} autocorrect="off" autocapitalize="off" spellcheck="false" type={this.props.type || 'text'} />
                {this.props.children}
            </div>
        )
    }
}

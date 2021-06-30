import React, { Component } from 'react'

export default class Button extends Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        this.props.wrapper.resetErrorMessage();
    }

    onClick = () => {
        if ( !this.props.disable )
            this.props.onClick();
    }
    
    render() {
        return (
            <div className="button">
                <button className={this.props.disable ? 'disable' : ''} onClick={ this.onClick } title={this.props.label}>{this.props.label}</button>
            </div>
        )
    }
}

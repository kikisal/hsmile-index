import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div className="button">
                <button className={this.props.disable ? 'disable' : ''} onClick={this.props.onClick} title={this.props.label}>{this.props.label}</button>
            </div>
        )
    }
}

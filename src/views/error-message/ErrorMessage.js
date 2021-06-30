import { Component } from 'react';
import './error-message.css';
import Config from './../../config';

export default class ErrorMessage extends Component {
    
    constructor( props ) {
        super(props);
        this.state = {
            message: '',
            loading: false
        }
        
    }

    handleMessage(msg) {
        this.setState({
            message: msg,
            loading: false
        });
    }

    loading() {
        this.setState({loading: true});
    }

    clear() {
        this.setState({
            message: undefined
        });
    }

    popErrorMessageUp() {
        return (
            <>
                <div className='error-wrapping'>
                    <div className='error-box'>
                        { this.state.message }
                    </div>
                </div>    
            </>
        );
    }

    RenderLoading() {
        return (
            <div className='loading-spinner'>
                <div className='loading-spinner-image' style={{
                    backgroundImage: `url(${Config.PUBLIC_ASSETS_URL}login/images/spin-tail.svg)`
                }}></div>    
            </div>
        );
    }

    render() {
        return this.state.message ? this.popErrorMessageUp() : (this.state.loading ? this.RenderLoading() : <></>);
    }
}
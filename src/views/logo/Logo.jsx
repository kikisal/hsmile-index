import React from 'react';
import Config from './../../config';

const style = {
    logoWrapper: {
        margin:'10px 0'
    },
    
    logo: {
        width:'187px',
        height: '98px',
        background: `url(${Config.PUBLIC_ASSETS_URL}/pix/img/logo.png)`,
        backgroundRepeat: 'no-repeat',
        filter: 'drop-shadow(-2px -2px 0 #fff)',
        margin:'0 auto',
    }
};


export default class Logo extends React.Component {
    render() {
        return (
            <>
                <div style={style.logoWrapper}>
                    <div style={style.logo}></div>
                </div>
            </>
        )
    }
}

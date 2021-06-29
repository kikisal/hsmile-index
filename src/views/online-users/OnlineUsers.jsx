import React from 'react';

const style = {
    color: '#8C8D91',
    textShadow: '0 1px 0 rgba(0,0,0,.3)'
}

export default class OnlineUsers extends React.Component {
    
    constructor(props) {
        super(props);
        this.usersOnline = 0;
        this.finalVocal = this.usersOnline === 1 ? 'e' : 'i';
    }

    componentDidMount() {
        // fetch online users.
        // ...
    }
    
    render() {
        return (
            <div>
                <div className="text">
                    <span style={style}>
                    Al momento ci sono {this.usersOnline} utent{this.finalVocal} online!
                    </span>
                </div>
            </div>
        )
    }
}

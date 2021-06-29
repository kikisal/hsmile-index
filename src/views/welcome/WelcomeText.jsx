import React from 'react';
import { Route, Switch } from 'react-router';

const style = {
    welcomeText: {
        margin: '24px 0'
    }
}

export default class WelcomeText extends React.Component {
    render() {
        return (
            <>

            <div style={style.welcomeText}>
                <div className="text big">
                    <Switch>
                        <Route path="/" exact={true}>
                            <span>Ehy, benvenuto!</span>
                        </Route>
                        <Route path="/index" exact={true}>
                            <span>Ehy, benvenuto!</span>
                        </Route>
                        <Route path="/recovery" exact={true}>
                            <span>Recupero password</span>
                        </Route>
                        <Route path="/register" exact={true}>
                            <span>Crea un account</span>
                        </Route>
                    </Switch>
                </div>
            </div>

            </>
        )
    }
}

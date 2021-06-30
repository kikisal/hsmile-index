import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';


export default class Bottom extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="text mini">
                <Switch>
                    <Route path="/recovery" exact={true}>    
                        <span style={{color: '#92959c'}}>
                            <a
                            style={{opacity:.8, cursor: 'pointer'}} 
                            title="Torna indietro"
                            onClick={() => window.history.back()}>Indietro</a>
                        </span>
                    </Route>
                    
                    <Route path="/register" exact={true}>    
                        <span style={{color: '#92959c'}}>
                            Hai già un account? <Link
                            style={{opacity:.8}} 
                            title="Accedi"
                            to="/">Accedi</Link>.
                        </span>
                    </Route>

                    <Route path="/" exact={true}> 
                        <span style={{color: '#92959c'}}>
                            Non hai ancora un account? <Link
                            style={{opacity:.8}} 
                            title="Crea un account!"
                            to="register">Clicca qui</Link> per crearne uno.
                        </span>
                    </Route>
                    <Route path="/index" exact={true}> 
                        <span style={{color: '#92959c'}}>
                            Non hai ancora un account? <Link
                            style={{opacity:.8}} 
                            title="Crea un account!"
                            to="register">Clicca qui</Link> per crearne uno.
                        </span>
                    </Route>

                </Switch>
            </div>
        )
    }
}

import Inferno from 'inferno';
import Component from 'inferno-component';
import redux from 'inferno-redux';

import * as actions from './../actions/actions';

export class Login extends Component{
    constructor(){
        super();
        this.onLogin = this.onLogin.bind(this);
    }
    
    onLogin(){
        var {dispatch} = this.props;
        dispatch(actions.startLogin());
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="columns small-centered small-10 medium-6 large-4">
                        <div className="callout callout-auth">
                            <h3>Todo App!</h3>
                                <p>
                                    <button className="button" onClick={this.onLogin}>Fazer Log-in com Facebook</button>
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default redux.connect()(Login);
import React from 'react';
import OktaSignIn from '@okta/okta-signin-widget';

export default class LoginPage extends React.Component{
    constructor(){
        super();
        this.state = {user: null};
        this.widget = new OktaSignIn({
            baseUrl: 'https://dev-985268.oktapreview.com',
            clientId: '8oagfe9x2agrYf7P50h7',
            redirectUrl: 'http://localhost:3000',
            authParams: {
                responseType: 'id_token'
            }
        });
        this.showLogin = this.showLogin.bind(this);
        this.logout = this.logout.bind(this);
    }
        componentDidMount(){
        this.widget.session.get((response)=>{
            if(response.status !== 'INACTIVE'){
                this.setState({user:response.login});
            } else{
                this.showLogin();
                
            }
        });
    }
    showLogin(){
        Backbone.history.stop();
        this.widget.renderEl({el:this.loginContainer}, (response) => {
            this.setState({user: response.claims.email});
        },
        (err) => {
            console.log(err);
        }
        );
    }
    logout(){
        this.widget.signOut(() => {
        this.setState({user: null});
        this.showLogin();
        });
    }
    render(){
        return(
            <div>
            {this.state.user ? (
                <div className="container">
                <div>Hello, welcome!</div>
                <button onClick={this.logout}>Logout</button>
            </div>
            ): null}
            {this.state.user ? null : (
               <div ref={(div) => {this.loginContainer = div;}}/> 
            )}
            </div>
        );
    }
}
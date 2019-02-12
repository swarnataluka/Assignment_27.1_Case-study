import React from 'react';
import { Link } from 'react-router';
import './PrimaryLogo_Green.svg';

export default class Navigation extends React.Component{
  static contextTypes = {
    user: React.PropTypes.object
  };
  render(){
    return (
      <div className="navbar navbar-inverse navbar-sticky navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar navbar-expand-lg navbar-light bg-light"><img width="100" height="100" src="./PrimaryLogo_Green.svg" alt="The Moviedb logo"/></Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right smooth-scroll">
              <li><Link to="/">Movies</Link></li>
              <li><Link to="tvshows">TVShows</Link></li>
              <li><Link to="watchlist">Watchlist</Link></li>
              <li><Link to="login">Login</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
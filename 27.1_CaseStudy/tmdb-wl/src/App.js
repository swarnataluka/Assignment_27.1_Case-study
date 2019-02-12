import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios.get('/api/movie')
      .then(res => {
        this.setState({ movies: res.data });
        console.log(this.state.movies);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              MOVIE LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Movie</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>poster path</th>
                  <th>title</th>
                  <th>overview</th>
                  <th>id</th>
                  <th>release date</th>
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map(movie =>
                  <tr>
                    <td><Link to={`/show/${movie._id}`}>{movie.poster_path}</Link></td>
                    <td>{movie.title}</td>
                    <td>{movie.overview}</td>
                    <td>{movie.id}</td>
                    <td>{movie.release_date}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
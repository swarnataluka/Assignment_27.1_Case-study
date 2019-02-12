import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    axios.get('/api/movie/'+this.props.match.params.id)
      .then(res => {
        this.setState({ movie: res.data });
        console.log(this.state.movie);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/movie/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.movie.title}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Movie/TV Show List</Link></h4>
            <dl>
              <dt>poster path:</dt>
              <dd>{this.state.movie.poster_path}</dd>
              <dt>Title:</dt>
              <dd>{this.state.movie.title}</dd>
              <dt>overview:</dt>
              <dd>{this.state.movie.overview}</dd>
              <dt>release date:</dt>
              <dd>{this.state.movie.release_date}</dd>
            </dl>
            <Link to={`/edit/${this.state.movie._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.movie._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
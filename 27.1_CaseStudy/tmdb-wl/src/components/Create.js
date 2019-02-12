import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      poster_path: '',
      title: '',
      overview: '',
      id: '',
      release_date: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { poster_path, title, overview, id, release_date } = this.state;

    axios.post('/api/movie', { poster_path, title, overview, id, release_date })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { poster_path, title, overview, id, release_date } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD MOVIE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Movie List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="poster_path">poster_path:</label>
                <input type="text" class="form-control" name="poster_path" value={poster_path} onChange={this.onChange} placeholder="poster path" />
              </div>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="overview">overview:</label>
                <input type="text" class="form-control" name="overview" value={overview} onChange={this.onChange} placeholder="overview" />
              </div>
              <div class="form-group">
                <label for="id">id:</label>
                <textArea class="form-control" name="id" onChange={this.onChange} placeholder="id" cols="80" rows="3">{id}</textArea>
              </div>
              <div class="form-group">
                <label for="release_date">release date:</label>
                <input type="number" class="form-control" name="release_date" value={release_date} onChange={this.onChange} placeholder="release date" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
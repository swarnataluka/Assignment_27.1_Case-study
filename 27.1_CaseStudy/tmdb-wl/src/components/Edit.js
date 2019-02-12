import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        };
    }

    componentDidMount() {
        axios.get('/api/movie/' + this.props.match.params.id)
            .then(res => {
                this.setState({ movie: res.data });
                console.log(this.state.movie);
            });
    }

    onChange = (e) => {
        const state = this.state.movie
        state[e.target.name] = e.target.value;
        this.setState({ movie: state });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { poster_path, title, overview, id, release_date } = this.state.movie;

        axios.put('/api/movie/' + this.props.match.params.id, { poster_path, title, overview, id, release_date })
            .then((result) => {
                this.props.history.push("/show/" + this.props.match.params.id)
            });
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            EDIT MOVIE
            </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to={`/show/${this.state.movie._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Movie List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="poster_path">poster path:</label>
                                <input type="text" class="form-control" name="poster_path" value={this.state.movie.poster_path} onChange={this.onChange} placeholder="poster path" />
                            </div>
                            <div class="form-group">
                                <label for="title">Title:</label>
                                <input type="text" class="form-control" name="title" value={this.state.movie.title} onChange={this.onChange} placeholder="Title" />
                            </div>
                            <div class="form-group">
                                <label for="overview">overview:</label>
                                <input type="text" class="form-control" name="overview" value={this.state.movie.overview} onChange={this.onChange} placeholder="overview" />
                            </div>
                            <div class="form-group">
                                <label for="id">id:</label>
                                <input type="text" class="form-control" name="id" value={this.state.movie.id} onChange={this.onChange} placeholder="id" />
                            </div>
                            <div class="form-group">
                                <label for="release_date">release date:</label>
                                <input type="number" class="form-control" name="release_date" value={this.state.movie.release_date} onChange={this.onChange} placeholder="release date" />
                            </div>
                            <button type="submit" class="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;
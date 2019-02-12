import React, { Component } from 'react';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class MoviesPage extends Component {
  constructor(props){
    super(props);
    this.state = {};
    //console.log("This is my initializer");
    this.performSearch("star");
  }
  performSearch(searchTerm){
    console.log("Perform search using moviedb");
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=74b51a603972af3f75d4f25e962588ab&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        var movieRows = [];
        const results = searchResults.results;
       results.forEach((movie) => {
         movie.poster_path = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie = {movie}/>
          movieRows.push(movieRow);
       })
       this.setState({row: movieRows});
      },
      error: (xhr, status, err) => {
        console.log("Fail to fetch data");
      }
    }
    )    
  }
  searchChangeHandler(event){
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm)
  }
  render() {
    return (
        <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td style={{paddingLeft: "10px"}}>
                  <h3>The MovieDB search</h3>
              </td>
              </tr>
          </tbody>
        </table>
        <input type="search" name="movieSearch" onChange={this.searchChangeHandler.bind(this)} placeholder="Search for a movie" style={{fontSize: 16, width: "100%", paddingTop: 8, paddingBottom: 8, paddingLeft: 16, display:'block' }}/>
        {this.state.row}<br/>
      </div>
    );
  }
}

export default MoviesPage;
import React, { Component } from 'react';
import TVShowsRow from './TVShowsRow.js';
import $ from 'jquery';

class TVShowsPage extends Component {
//TVShowsPage component is first initialized
  constructor(props){
    super(props);
//initialize App component state
    this.state = {};
// initializer
    this.performSearch("star");
  }
  performSearch(searchTerm){
    console.log("Perform search using themoviedb");
    const urlString1 = "https://api.themoviedb.org/3/search/tv?api_key=74b51a603972af3f75d4f25e962588ab&query=" + searchTerm;
    $.ajax({
      url: urlString1,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        var tvRows = [];
        const results = searchResults.results;
       results.forEach((tv) => {
         tv.poster_path = "https://image.tmdb.org/t/p/w500" + tv.poster_path;
          const tvRow = <TVShowsRow key={tv.id} tv = {tv}/>
          tvRows.push(tvRow);
       })
       this.setState({row: tvRows});
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
                  <h3>The TVDB search</h3>
              </td>
              </tr>
          </tbody>
        </table>
        <input type="search" name="tvSearch" onChange={this.searchChangeHandler.bind(this)} placeholder="Search for a TV show" style={{fontSize: 16, width: "100%", paddingTop: 8, paddingBottom: 8, paddingLeft: 16, display:'block' }}/>
        {this.state.row}<br/>
      </div>
    );
  }
}

export default TVShowsPage;
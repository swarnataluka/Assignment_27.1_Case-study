import React from 'react';

class MovieRow extends React.Component{
    watchlistMov(){
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.location.href = url;
    }
    render(){
        return (<table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img src={this.props.movie.poster_path} width="150" alt="Movie poster"/>
            </td>
            <td>
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <input type="button" onClick={this.watchlistMov.bind(this)} value="watchlist" />
            </td>
          </tr>
        </tbody>
      </table>
        )
    }
}

export default MovieRow;
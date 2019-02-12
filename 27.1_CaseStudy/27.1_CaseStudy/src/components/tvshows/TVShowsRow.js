import React from 'react';

class TVShowsRow extends React.Component{
    watchlistTV(){
        const url = "https://www.themoviedb.org/movie/" + this.props.tv.id;
        window.location.href = url;
    }
    render(){
        return (<table key={this.props.tv.id}>
        <tbody>
          <tr>
            <td>
              <img src={this.props.tv.poster_path} width="150" alt="Movie poster"/>
            </td>
            <td>
              <h3>{this.props.tv.title}</h3>
              <p>{this.props.tv.overview}</p>
              <input type="button" onClick={this.watchlistTV.bind(this)} value="watchlist" />
            </td>
          </tr>
        </tbody>
      </table>
        )
    }
}

export default TVShowsRow;
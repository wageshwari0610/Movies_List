import React, { Component } from "react";
import "./App.css";
import { getMovies } from "./services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.min.css";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  handleDelete=(movie)=>{
    const movies=this.state.movies.filter(m => m._id!==movie._id);
    this.setState({movies});

};

  render() {
    if(this.state.movies.length===0){return <p className="hding">There are no movies in Database</p>}
    return (
      <div className="container">
        <h3 className="hding">
          Showing {this.state.movies.length} Movies in the database .
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button onClick={()=>this.handleDelete(movie)} className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            ;
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;

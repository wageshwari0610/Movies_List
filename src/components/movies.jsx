import React, { Component } from "react";
import "../App.css";
import { getMovies } from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.min.css";
import Like from "./common/like";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import {getGenres} from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage:1,
    genres:[]
  };
  componentDidMount(){
    this.setState({movies: getMovies(), genres: getGenres()});
  }

  handleGenreSelect = genre => {
    console.log(genre);
  }

  

  handleLike = () => {
    console.log("HELLO");
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageChange=(page)=>{
    this.setState({currentPage : page});
  }

  render() {
    const {pageSize,currentPage,movies}=this.state;
    const movie = paginate(movies,currentPage,pageSize);
    if (movies.length === 0) {
      return <p className="hding">There are no movies in Database</p>;
    }
    
    return (
      <div className="row">
      <div className="col-2">
        <ListGroup
        items={this.state.genres}
        onItemSelect={this.handleGenreSelect}/>
      </div>
      <div className="col">
      <div className="container">
        <h3 className="hding">
          Showing {movies.length} Movies in the database .
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {movie.map( movie => ( 
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))};
          </tbody>
        </table>
        <Pagination
          itemsCount={this.state.movies.length}
          pageSize={this.state.pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
      </div>
      </div>
      
    );
  }
}

export default Movies;

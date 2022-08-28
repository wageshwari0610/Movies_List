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
    this.setState({movies: getMovies() , genres: getGenres()});
  }

  handleGenreSelect = genre => {
    this.setState({selectedGenre : genre});
    console.log(this.state);
  };

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
    const { length : count} = this.state.movies;
    const {
      pageSize,
      selectedGenre,
      currentPage,
      movies : allMovies
    }=this.state;

    
    if (count === 0) {
      return <p className="hding">There are no movies in Database</p>;
    }

    const filtered = selectedGenre 
    ? allMovies.filter((items) => items._id===selectedGenre._id) 
    : allMovies;

    const movie = paginate(filtered,currentPage,pageSize);
   
    
    return (
      <div className="row">
      <div className="col-2">
        <div className="margin_design">
        <ListGroup
        items={this.state.genres}
        onItemSelect={this.handleGenreSelect}
        selectedValue={selectedGenre}/>
      </div></div>
      <div className="col">
      <div className="container">
        <h3 className="hding">
          Showing {filtered.length} Movies in the database .
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
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
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
          itemsCount={filtered.length}
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

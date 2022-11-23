import React, { Component } from "react";
import "../App.css";
import { getMovies } from "../services/fakeMovieService";
// import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./MovieTable";
import { Link } from "react-router-dom";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genre" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSorting = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      selectedGenre,
      currentPage,
      movies: allMovies,
      sortColumn,
    } = this.state;

    if (count === 0) {
      return <p className="hding">There are no movies in Database</p>;
    }

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((items) => items.genre.name === selectedGenre.name)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movie = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <div className="margin_design">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedValue={selectedGenre}
            />
          </div>
        </div>
        <div className="col">
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          <div className="container">
            <h3 className="hding">
              Showing {filtered.length} Movies in the database .
            </h3>
            <MovieTable
              movie={movie}
              onDelete={this.handleDelete}
              onSort={this.handleSorting}
              sortColumn={sortColumn}
            />
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

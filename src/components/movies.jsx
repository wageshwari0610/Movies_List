import React, { Component } from "react";
import "../App.css";
import { getMovies } from "../services/fakeMovieService";
// import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./MovieTable";
import SearchBox from "./searchBox";
import { Link } from "react-router-dom";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedGenre: null,
    genres: [],
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genre" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
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

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      selectedGenre,
      searchQuery,
      currentPage,
      movies: allMovies,
      sortColumn,
    } = this.state;

    if (count === 0) {
      return <p className="hding">There are no movies in Database</p>;
    }

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(
        (items) => items.genre._id === selectedGenre._id
      );

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
            to="/Movies_List/movies/new"
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
            <SearchBox value={searchQuery} onChange={this.handleSearch} />

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

import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import notFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import Register from "./components/register";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/movies/:id" element={<MovieForm />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/not-found" element={<notFound />} />
            <Route path="/register" element={<Register />} />
            <Route path="/movies/new" element={<MovieForm />} />
            <Route path="/" element={<Navigate to="/movies" />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

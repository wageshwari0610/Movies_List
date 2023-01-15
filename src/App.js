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
            <Route path="/Movies_List/login" element={<LoginForm />} />
            <Route path="/Movies_List/movies/:id" element={<MovieForm />} />
            <Route path="/Movies_List/movies" element={<Movies />} />
            <Route path="/Movies_List/customers" element={<Customers />} />
            <Route path="/Movies_List/rentals" element={<Rentals />} />
            <Route path="/Movies_List/not-found" element={<notFound />} />
            <Route path="/Movies_List/register" element={<Register />} />
            <Route path="/Movies_List/movies/new" element={<MovieForm />} />
            <Route
              path="/Movies_List/"
              element={<Navigate to="/Movies_List/movies" />}
            />
            <Route
              path="*"
              element={<Navigate to="/Movies_List/not-found" />}
            />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

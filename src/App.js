import axios from "axios";
import { useEffect, useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Movies from "./components/Movies";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ShowTimes from "./components/ShowTImes";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    let resMovies = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );
    resMovies.then((response) => {
      setMovies(response.data);
    });
    resMovies.catch((err) => console.log(err));
  });
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Movies
              movies={movies}
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
            />
          }
        />
        <Route
          path="/section"
          element={<ShowTimes selectedMovie={selectedMovie} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

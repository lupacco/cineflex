import { useEffect, useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header"
import Movies from "./components/Movies";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import ShowTimes from "./components/ShowTImes";



export default function App() {

  return (
    <BrowserRouter>
        <GlobalStyle/>

        <Header/>
        <Routes>
          <Route path="/" element={<Movies/>}/>
          <Route path="/sessoes/:idMovie" element={<ShowTimes/>}/>
        </Routes>
      
    </BrowserRouter>
  );
}



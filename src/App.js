import { useEffect, useState } from "react";
import GlobalStyle from "./components/GlobalStyle";

import Header from "./components/Header"
import Home from "./components/Home";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"

import ShowTimes from "./components/ShowTImes";
import ChooseAssent from "./components/ChooseAssent";
import SuccessScreen from "./components/SuccessScreen";

export default function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />


        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sessoes/:idMovie" element={<ShowTimes/>}/>
          <Route path="/assentos/:idSession" element={<ChooseAssent/>}/>
          <Route path="/sucesso" element={<SuccessScreen/>}/>
        </Routes>
      
    </BrowserRouter>
  );
}

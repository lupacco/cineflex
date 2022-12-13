import { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";

import Header from "./components/Header"
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ShowTimes from "./components/ShowTimes"
import ChooseAssent from "./components/ChooseAssent";
import SuccessScreen from "./components/SuccessScreen";

export default function App() {
  const [movieInfo, setMovieInfo] = useState(undefined)
  const [movieTime, setMovieTime] = useState(undefined)
  const [assents, setAssents] = useState([])
  const [selectedAssents, setSelectedAssents] = useState([])
  const [buyer, setBuyer] = useState('')
  const [buyerCpf, setBuyerCpf] = useState('')

  return (
    <BrowserRouter>
      <GlobalStyle />


        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sessoes/:idMovie" element={<ShowTimes
            movieInfo={movieInfo}
            setMovieInfo={setMovieInfo}
          />}/>
          <Route path="/assentos/:idSession" element={<ChooseAssent
            movieInfo={movieInfo}
            assents={assents}
            setAssents={setAssents}
            movieTime={movieTime}
            setMovieTime={setMovieTime}
            selectedAssents={selectedAssents}
            setSelectedAssents={setSelectedAssents}
            buyer={buyer}
            setBuyer={setBuyer}
            buyerCpf={buyerCpf}
            setBuyerCpf={setBuyerCpf}
          />}/>
          <Route path="/sucesso" element={<SuccessScreen
            movieInfo={movieInfo}
          />}/>
        </Routes>
      
    </BrowserRouter>
  );
}

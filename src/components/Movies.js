import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import Movie from "./Movie"

export default function Movies(){
    const moviesURL = 'https://mock-api.driven.com.br/api/v8/cineflex/movies'

    const [movies, setMovies] = useState([])

    useEffect(() => {
        let resMovies = axios.get(moviesURL)
        resMovies.then(response => {
          setMovies(response.data)
        })
        resMovies.catch(err => console.log(err))
      }, [])
    return (
        <MoviesContainer>
            <h2>Selecione o filme</h2>
            <section>
                {
                movies.map(movie => {
                    return(
                        <Movie 
                        key={movie.id}
                        movie={movie}
                        />
                    )
                })
                }
            </section>
        </MoviesContainer>
    )
}

const MoviesContainer = styled.main`
    align-items: center;
    > h2{
        margin: 40px auto;
        color: #293845;
        text-align: center;
        font-size: 24px;
    }
    >section{
        display: flex;
        flex-wrap: wrap;
        overflow-y: scroll;
    }
`
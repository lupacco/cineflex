import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Home(){
    const moviesURL = 'https://mock-api.driven.com.br/api/v8/cineflex/movies'

    const [movies, setMovies] = useState([])
    let moviesArrived = !(movies[0] === undefined)

    useEffect(() => {
        let resMovies = axios.get(moviesURL)
        resMovies.then(response => {
          setMovies(response.data)
          moviesArrived = true
        })
        resMovies.catch(err => console.log(err))
      }, [])
    return (
        <>
            {moviesArrived ? (
                <MoviesContainer>
                    <h2>Selecione o filme</h2>
                    <section>
                        {
                        movies.map(movie => {
                            return(
                                <Link key={movie.id} to={`/sessoes/${movie.id}`}>
                                    <img alt="" src={movie.posterURL}></img>
                                </Link>
                            )
                        })
                        }
                    </section>
                </MoviesContainer>
            ) : (
                <h1>Carregando...</h1>
            )}
        </>
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
    img{
        width: 129px;
        height: 193px;
        margin: 0 32px 32px;
    }
`
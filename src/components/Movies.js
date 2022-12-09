import styled from "styled-components"
import Movie from "./Movie"

export default function Movies(props){
    const { movies } = props
    return (
        <MoviesContainer>
            <h2>Selecione o filme</h2>
            <section>
                {
                movies.map(movie => {
                    return(
                        <Movie key={movie.id} movie={movie}/>
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px 32px;
        align-items: center;
        justify-content: center;
        overflow-y: scroll;
    }
`
import styled from "styled-components"
import {Link, useParams} from "react-router-dom"
import axios from "axios"

export default function Movie(props){
    const { movie, selectedMovie} = props
    const {idMovie} = useParams()

    let apiURL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movie.id}/showtimes`
    async function handleSelectMovie(){
        console.log(apiURL)
        // await axios.get(apiURL)
        // .then(response => {
        //     console.log('resposta')
        //     console.log(response.data.days)
        //     setSelectedMovieST(response.data.days)
        // })
        // .catch(err => {console.log(err)})
    }
    
    return (
        
            <MovieContainer onClick={handleSelectMovie}>
                {/* <Link to={`/sessoes/${movie.id}`}> */}
                    <img alt="" src={movie.posterURL}></img>
                {/* </Link> */}
            </MovieContainer>
    )
}

const MovieContainer = styled.div`
    width: 129px;
    height: 193px;
    margin: 0 32px 32px;
    img{
        width: 100%;
        height: 100%;
    }
`
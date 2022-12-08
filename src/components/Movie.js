import styled from "styled-components"

export default function Movie(props){
    const { movie } = props
    return (
        <MovieContainer>
            <img alt="" src={movie.posterURL}></img>
        </MovieContainer>
    )
}

const MovieContainer = styled.div`
    width: 129px;
    height: 193px;
    margin: 0 32px 32px;
    >img{
        width: 100%;
        height: 100%;
    }
`
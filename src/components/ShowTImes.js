import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export default function ShowTimes(props){
    const {idMovie} = useParams()
    const [movieInfo, setMovieInfo] = useState([])

    const movieTimeURL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`


    useEffect(() => {
        console.log(movieTimeURL)
        axios.get(movieTimeURL)
        .then(response => {
            console.log('resposta')
            console.log(response.data)
            
        })
        .catch(err => {console.log(err)})
    },[])

    return(
        <>
            <ShowTimesContainer>
            <h2>Selecione o filme</h2>

                <SessionDay>
                    <h3>Quinta-Feira - 24/06/2021</h3>
                        <SessionsContainer>
                            <div>15:00</div>
                            <div> 15:00</div>
                    </SessionsContainer>
                </SessionDay>
                
                
            </ShowTimesContainer>
        </>
    )
}

const ShowTimesContainer = styled.div`
    align-items: center;
    >h2{
        margin: 40px auto;
        color: #293845;
        text-align: center;
        font-size: 24px;
    }
    
`

const SessionDay = styled.section`
    margin: 0 32px;
    >h3{
        margin-bottom: 32px;
    }
`

const SessionsContainer = styled.div`
    display: flex;
    > div{
        width: 82px;
        height: 43px;
        background-color: #E8833A;
        color: #FFFFFF;
        margin: 0 16px 16px 0;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
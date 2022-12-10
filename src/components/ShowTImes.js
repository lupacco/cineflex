import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function ShowTimes(props){
    const {idMovie} = useParams()
    const {movieInfo, setMovieInfo} = props

    let movieInfoArrived = !(movieInfo === undefined)

    const movieTimeURL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`


    useEffect(() => {
        axios.get(movieTimeURL)
        .then(response => {
            setMovieInfo(response.data)
        })
        .catch(err => {console.log(err)})
    },[])

    return(
        <>  
        <ShowTimesContainer>
            <h2>Selecione o horário</h2>
            {movieInfoArrived ? (
            movieInfo.days.map(day => {
                return(
                    <SessionDay key={day.id}>
                        <h3>{day.weekday} - {day.date}1</h3>
                            <SessionsContainer>
                                {day.showtimes.map(time => {
                                    return (
                                        <Link key={time.id} to={`/assentos/${time.id}`}>
                                            <div>{time.name}</div>
                                        </Link>
                                    )
                                })}
                            </SessionsContainer>
                    </SessionDay>
                    
                    )
                })
                ) : (<div>Carregando...</div>)}
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
    a{
        text-decoration: none;
    }
    div{
        width: 82px;
        height: 43px;
        background-color: #E8833A;
        color: #FFFFFF;
        margin: 0 16px 16px 0;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        >button{
            background: none;
            border-style: none;
        }
        >button:hover{
            cursor: pointer;
        }
    }
`
import axios from "axios"
import { useEffect } from "react"
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

                <ul>
                    {movieInfoArrived ? (
                        <>
                            {movieInfo.days.map(day => 
                                (
                                    <SessionDay key={day.id}>
                                        <h3>{day.weekday} - {day.date}</h3>
                                            <SessionsContainer>
                                                {day.showtimes.map(time => 
                                                    (
                                                        <Link key={time.id} to={`/assentos/${time.id}`}>
                                                            <div>{time.name}</div>
                                                        </Link>
                                                    )
                                                    )}
                                            </SessionsContainer>
                                    </SessionDay>
                                )
                            )}
                            <MovieInfo>
                                <img alt="" src={movieInfo.posterURL}></img>
                                <div>
                                    <p>{movieInfo.title}</p>
                                </div>
                            </MovieInfo>
                        </>
                    ) : (
                        <div>Carregando...</div>
                    )}
                </ul>
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
const MovieInfo = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 117px;
  display: flex;
  align-items: center;
  justify-content: left;
  background: #dfe6ed;
  color: #9eadba;
  padding: 0 8px;

  >img{
    width:64px;
    height:89px;
    background:#FFFFFF;
    padding:8px;
    margin-right: 24px;
  }
  >div{
    >p{
        font-size:22px;
        color:#293845;
    }
  }
`;
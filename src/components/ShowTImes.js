import axios from "axios"
import { useEffect } from "react"
import styled from "styled-components"

export default function ShowTimes(props){
    const {selectedMovie, selectedMovieST, setSelectedMovieST} = props

    useEffect(() => {
        let apiURL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${selectedMovie.id}/showtimes`
        console.log(apiURL)
        axios.get(apiURL)
        .then(response => {
            console.log('resposta')
            console.log(response.data.days)
            setSelectedMovieST(response.data.days)
        })
        .catch(err => {console.log(err)})
    },[])

    if(selectedMovieST){
        return(
            <>
                <ShowTimesContainer>
                <h2>Selecione o filme</h2>
                    {
                        selectedMovieST.map(day => {
                            <SessionDay>
                                <h3>Quinta-Feira - 24/06/2021</h3>
                                    <SessionsContainer>
                                        <div>15:00</div>
                                        <div> 15:00</div>
                                </SessionsContainer>
                            </SessionDay>
                        })
                    }
                    
                </ShowTimesContainer>
            </>
            )
    }else{
        return(<div>Carregando...</div>)
    }

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
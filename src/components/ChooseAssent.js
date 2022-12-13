import axios from "axios"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

export default function ChooseAssent(props){
    const {movieInfo, movieTime, setMovieTime} = props
    const {idSession} = useParams()
    const assentsURL = `
    https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSession}/seats`
    const {assents, setAssents} = props

    let assentsArrived = !(assents[0] === undefined)

    const navigate = useNavigate()

    useEffect(() => {
        //rescure assent objects from API
        axios.get(assentsURL)
        .then(response => {
            setMovieTime(response.data.day)
            setAssents(response.data.seats)

        })
        .catch(err => {console.log(err)})
    },[])

    console.log(movieTime)
    console.log(assents)
    function makeReserve(event){
        event.preventDefault()
        console.log("submiteddddd")
        navigate("/sucesso")
    }

    return(
        <>
            <AssentsContainer>
                <h2>Selecione o(s) assento(s)</h2>
                {assentsArrived ? (
                    <>
                        <AllAssents>
                            {assentsArrived ? (
                                assents.map(assent => {
                                    return (
                                        <Assent
                                            key={assent.id}
                                            selected={assent.isAvailable}
                                            >
                                                {assent.name}
                                        </Assent>
                                    )
                                })
                            ) : (
                                <h1>Carregando...</h1>
                            )}
                        </AllAssents>
                        <AssentsInfoContainer>
                                <div>
                                    <div className="assent selected"></div>
                                    <p>Selecionado</p>
                                </div>
                                <div>
                                    <div className="assent"></div>
                                    <p>Disponível</p>
                                </div>
                                <div>
                                    <div className="assent busy"></div>
                                    <p>Indisponível</p>
                                </div>
                        </AssentsInfoContainer>
                        <FormContainer>
                            <form onSubmit={makeReserve}>
                                <div>
                                    <label>Nome do comprador:</label>
                                    <input required type="text" id="buyerName"></input>
                                </div>
                                <div>
                                    <label>CPF do comprador:</label>
                                    <input required type="number" id="buyerName"></input>
                                </div>
                                <button type="submit">Reservar assento(s)</button>
                            </form>
                        </FormContainer>
                        <MovieInfo>
                            <img alt="" src={movieInfo.posterURL}></img>
                            <div>
                                <p>{movieInfo.title}</p>
                                <p>{`${movieTime.weekday} - ${movieTime.date}`}</p>
                            </div>
                        </MovieInfo>
                    </>
                ) : (
                    <div>Carregando...</div>
                )}
            </AssentsContainer>
        </>
    )
}

const AssentsContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;

    >h2{
        margin: 40px auto;
        color: #293845;
        text-align: center;
        font-size: 24px;
    }
`
const AllAssents = styled.section`
    display:flex;
    flex-wrap:wrap;
    max-width: 470px;
    align-items: center;
    justify-content: space-evenly;
`
const Assent = styled.div`
    margin: 8px 6px;
    width:28px;
    height:28px;
    border-radius: 100%;
    background: #C3CFD9;
    border: solid 1px #808F9D;
    display:flex;
    align-items:center;
    justify-content:center;
`

const AssentsInfoContainer = styled.div`
    width: 90%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    >div{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
    .assent{
        margin: 12px 6px;
        width:32px;
        height:32px;
        border-radius: 100%;
        background: #C3CFD9;
        border: solid 1px #808F9D;
        font-size: 13px;
    }
    .selected{
        background:#1AAE9E;
        border: solid 1px #0E7D71;
    }
    .busy{
        background:#FBE192;
        border:solid 1px #F7C52B;
    }
`
const FormContainer = styled.div`
    width:90%;
    margin-top:32px;
    >form{
        display:flex;
        flex-direction:column;
        align-items:left;
        >div{
            margin-bottom:16px;
        }
        label{
            display:block;
            color:#293845;
            font-size:18px;
            margin-bottom:8px;
        }
        input{
            height: 50px;
            width: 313px;
        }
        button{
            width:225px;
            height:42px;
            border-radius:6px;
            border-style:none;
            background:#E8833A;
            color:#FFFFFF;
            font-size: 18px;
            margin: 16px auto;
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
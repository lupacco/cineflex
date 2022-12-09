import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export default function ChooseAssent(){
    const {idSession} = useParams()
    const assentsURL = `
    https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSession}/seats`
    const [assents, setAssents] = useState([])
    let assentsArrived = !(assents[0] === undefined)

    useEffect(() => {
        axios.get(assentsURL)
        .then(response => {
            console.log(response.data.seats)
            setAssents(response.data.seats)
        })
        .catch(err => {console.log(err)})
    },[])

    return(
        <>
            <AssentsContainer>
            <h2>Selecione o(s) assento(s)</h2>
                <AllAssents>
                    {assentsArrived ? (
                        assents.map(assent => {
                            return (
                                <div>
                                    <Assent
                                        selected={assent.isAvailable}
                                    >
                                        {assent.name}
                                    </Assent>
                                </div>
                            )
                        })
                    ) : (
                        <h1>Carregando...</h1>
                    )}
                </AllAssents>
                <AssentsInfoContainer>
                        <div>
                            <div class="assent selected"></div>
                            <p>Selecionado</p>
                        </div>
                        <div>
                            <div class="assent"></div>
                            <p>Disponível</p>
                        </div>
                        <div>
                            <div class="assent busy"></div>
                            <p>Indisponível</p>
                        </div>
                </AssentsInfoContainer>
                <FormContainer>

                </FormContainer>
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
    >div{
        margin: 12px 6px;
        width:32px;
        height:32px;
        border-radius: 100%;
        background: #C3CFD9;
        border: solid 1px #808F9D;
        display:flex;
        align-items:center;
        justify-content:center;
    }
`
const Assent = styled.button`
    margin: 8px
    border-radius: 50%;
    width:100%;
    height:100%;
    background: none;
    border-style:none;
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
const FormContainer = styled.form``
import axios from "axios"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

export default function ChooseAssent(props){
    const {assents, setAssents, movieInfo, movieTime, setMovieTime, selectedAssents,setSelectedAssents, buyer, setBuyer, buyerCpf, setBuyerCpf} = props
    const {idSession} = useParams()
    const assentsURL = `
    https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSession}/seats`

    let assentsArrived = !(assents[0] === undefined)

    const navigate = useNavigate()

    useEffect(() => {
        //rescure assent objects from API
        axios.get(assentsURL)
        .then(response => {
            setMovieTime(response.data)
            setAssents(response.data.seats)

        })
        .catch(err => {console.log(err)})
    },[])
    
    function selectAssent(assentAvailable, assentId){
        let newSelectedAssents = []
        //Check if the assent is available
        if(!assentAvailable){
            alert("Esse assento não está disponível!")
            return
        }
        //if the assent is not selected we add it to the selectedAssents
        if(!selectedAssents.includes(assentId)){
            newSelectedAssents = [...selectedAssents, assentId]
        } 
        //if its already selected we remove from selectedAssents
        else{
            for(let i in selectedAssents){
                if(selectedAssents[i] !== assentId){
                    newSelectedAssents.push(Number(selectedAssents[i]))
                }
            }
        }
        //update the state
        setSelectedAssents(newSelectedAssents)
        console.log(newSelectedAssents)
    }
    
    function handleChangeBuyer(event){
        let newBuyerVal = event.target.value
        setBuyer(newBuyerVal)
    }
    
    function handleChangeCPF(event){
        let newCpfValue = event.target.value
        setBuyerCpf(newCpfValue)
        
    }
    

    function makeReserve(event){
        event.preventDefault()

        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
            ids:selectedAssents,
            name:buyer,
            cpf:buyerCpf
            })
        .then(res => {
            console.log(res)
            navigate("/sucesso")
        })
        .catch(err => console.log(err))
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
                                            data-test="seat"
                                            className={assent.isAvailable ? ("available") : ("")}
                                            onClick={() => {selectAssent(assent.isAvailable, assent.id)}}
                                            key={assent.id}
                                            isAvailable={assent.isAvailable}
                                            isSelected={selectedAssents.includes(Number(assent.id))}
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
                                    <input data-test="client-name" required value={buyer} onChange={handleChangeBuyer} type="text" id="buyerName"></input>
                                </div>
                                <div>
                                    <label>CPF do comprador:</label>
                                    <input data-test="client-cpf" required value={buyerCpf} onChange={handleChangeCPF} type="number" id="buyerName"></input>
                                </div>
                                <button data-test="book-seat-btn" type="submit">Reservar assento(s)</button>
                            </form>
                        </FormContainer>
                        <MovieInfo data-test="footer">
                            <img alt="" src={movieInfo.posterURL}></img>
                            <div>
                                <p>{movieInfo.title}</p>
                                <p>{`${movieTime.day.weekday} - ${movieTime.name}`}</p>
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
    background: ${props => props.isAvailable ? (props.isSelected ? (`#1AAE9E`) : (`#C3CFD9`)) : `#F7C52B`};
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
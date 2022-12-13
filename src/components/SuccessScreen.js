import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function SuccessScreen(props){
    const {assents, setAssents, movieInfo, movieTime, setMovieTime, selectedAssents,setSelectedAssents, buyer, setBuyer, buyerCpf, setBuyerCpf} = props
    const navigate = useNavigate()

    function goHome(){
        setSelectedAssents([]) //reset selectedAssents
        setBuyer('') //reset buyer input
        setBuyerCpf('') // reset cpf input
        return navigate("/")
    }

    console.log('---------')
    console.log(movieInfo)
    console.log('---------')
    console.log(movieTime)
    console.log('---------')
    console.log(assents)
    console.log('---------')
    console.log(selectedAssents)
    console.log('---------')
    console.log(buyer)
    console.log('---------')
    console.log(buyerCpf)
    console.log('---------')

    return (
        <SucessContainer>
            <h2>Pedido feito com sucesso!</h2>
            <section data-test="movie-info">
                <h3>Filme e sessão</h3>
                <p>{movieInfo.title}</p>
                <p>{""} {""}</p>
            </section>
            <section data-test="seats-info">
                <h3>Ingressos</h3>
                <p>Assento A</p>
                <p>Assento A</p>
                <p>Assento A</p>
            </section>
            <section data-test="client-info">
                <h3>Comprador</h3>
                <p>Nome:</p>
                <p>CPF:</p>
            </section>
            <button data-test="go-home-btn" onClick={goHome} type="submit">Voltar para Home</button>
        </SucessContainer>
    )
}

const SucessContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    
    >h2{
        margin: 40px auto;
        color: #293845;
        text-align: center;
        font-size: 24px;
    }
    >section{
        width:90%;
        color: #293845;
        text-align:left;
        margin-bottom: 32px;
        >h3{
            font-size: 24px;
            font-weight: 700;
            margin-bottom:8px;
        }
        >p{
            font-size: 22px;
        }
    }
    button{
        width:225px;
        height:42px;
        border-radius:6px;
        border-style:none;
        background:#E8833A;
        color:#FFFFFF;
        font-size: 18px;
        margin: 32px auto;
    }
`
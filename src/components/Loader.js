import styled from "styled-components"
import loaderImg from "../assets/loaderImg.png"

export default function Loader(){
    return(
        <LoaderContainer>
            <img alt="" src={loaderImg}></img>
        </LoaderContainer>
    )
}

const LoaderContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 100%;
    position: relative;
    
    > img {
        background-color: #FFFFFF;
        position: absolute;
        top: 300px;
        width: 120px;
        animation: loaderSpin 1s linear infinite;
    }
    @keyframes loaderSpin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`
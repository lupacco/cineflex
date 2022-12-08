import styled from "styled-components"

export default function Header(){
    return(
        <HeaderContainer>
            <h1>CINEFLEX</h1>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    background-color: #C3CFD9;
    color: #E8833A;
    height: 67px;
    width: 100%;
    display: flex;
    align-items: center;

    >h1{
        margin: 0 auto;
    }
`
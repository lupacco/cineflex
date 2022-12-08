import styled from "styled-components"

export default function ShowTimes(props){
    return(
        <ShowTimesContainer>
            <h2>Selecione o filme</h2>
            <section>
                <h3>Quinta-Feira - 24/06/2021</h3>
                <SessionsContainer>
                    <div>
                        <p>15:00</p>
                    </div>
                    <div> 15:00</div>
                </SessionsContainer>
            </section>
        </ShowTimesContainer>
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
    >section{
        margin: 0 32px;
        >h3{
            margin-bottom: 32px;
        }
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
        >p{
            margin: 0  auto;
        }
    }
`
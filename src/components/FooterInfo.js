import styled from "styled-components";

export default function FooterInfo(props) {
    const {movieInfo} = props
    console.log(movieInfo)
  return (
    <>
      <FooterContainer>
        <img alt="" src={movieInfo.posterURL}></img>
        <div>
          <p>Título</p>
          <p>Horario</p>
        </div>
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.div`
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
        font-size:26px;
        color:#293845;
    }
  }
`;

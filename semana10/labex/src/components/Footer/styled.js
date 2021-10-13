import styled from "styled-components"

export const FooterContainer = styled.div`
  height: 35vh;
  background-color: black;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  p, h3{
      color:lightgray;
      font-size: 12px;
  }
`

export const SocialMedias = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 25vw;
`

export const InformationsFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  width:100%;
  p{
      cursor: pointer;
      color: white;
      font-size: 18px;
  }
`
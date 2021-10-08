import styled from "styled-components";

export const CardPersonContainer = styled.div`
  margin-top: 12px;
  height: 430px;
  width: 350px;
  position: relative;
  border-radius: 6px;
  box-shadow: 2px 2px 5px black;
 
`
export const PersonImage = styled.img`
  height: 360px;
  width: 100%;
  position: absolute;
  border-radius: 6px;
  
`
export const PersonImageFundo = styled.img`
  height: 430px;
  width: 100%;
  filter: blur(5px);
  position: absolute;
  
`

export const InformationContainer = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 0px;
  height: 30%;
  width: 100%;
  text-align:center;
  padding: 35px;
  background-color: rgba(232, 232, 232, 0.3);
  h2{
    font-size: 22px;
  }
`
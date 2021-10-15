import styled from "styled-components";
import BackImage from "../../components/imgs/2.jpg"

export const BackgroungImage = styled.div`
  background-image: url('${BackImage}');
  min-height: 100vh;
  background-size: 100% 100%;
`
export const HomeInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  h3{
      color:white;
      text-align: center;
      padding-top: 10%;
      font-size: 12vh;
  }
`
export const Buttons = styled.div`
   display: flex;
   justify-content: space-around;
   width: 60vw;
   margin-top: 20vh;
   padding: 5px;
   button{
    width: 20vw;
    height: 5vh;
    border:2px solid white;
   color:#ffffff;
   font-size: 24px;
   line-height: 24px;
   position: relative;
   box-sizing: border-box;
   cursor: pointer;
   transition: all 400ms ease;
   background-color: black;
   text-align: center;
   border-radius:20px;
   :hover{
       background: rgba(0,0,0,0);
       color:white;
       box-shadow: inset 0 0 0 3px white;
   }

   } 
`
import styled from "styled-components"


export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(7,7,7);
  background: linear-gradient(175deg, rgba(7,7,7,0.8542252444149403) 12%, rgba(25,19,115,0.7306297387969628) 45%);

`
export const HeaderLogin = styled.div`
 height: 10vh;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 background-color: black;
 color:white;
 padding-right: 30px;
 button{
  width: 8vw;
  border-radius: 10px;
 }
`
export const Meio = styled.div`
 display: flex;
 div{
     width: 50%;
     min-height: 90vh;
 }
`
export const ImageLogin = styled.div`
  display: flex;
  align-items: center;
  img{
      width: 80%;
      padding-left: 12px;
      border-radius: 30px;
      box-shadow: 5px 5px 10px black;
  }
`
export const InputLogin = styled.div`
 display: flex;
 flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
      font-size: 35px;
      margin-bottom: 25px;
  }

  input{
      font-size: 30px;
      padding: 5px;
      margin: 5px;
      border: 1px solid black;
      border-radius: 5px;
  }


  button{
    margin-top: 20px;
    border-radius: 10px;
    width: 10vw;
    color: white;
    background-color: black;
    font-size: 20px;
  }
  
`
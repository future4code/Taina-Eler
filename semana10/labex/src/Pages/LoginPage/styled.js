import styled from "styled-components"


export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
`
export const HeaderLogin = styled.div`
 height: 10vh;

 background-color: black;
 color:white;
`
export const Meio = styled.div`
 display: flex;
 div{
     width: 50%;
     height: 90vh;
 }
`
export const ImageLogin = styled.div`
  display: flex;
  align-items: center;
  img{
      width: 80%;
      padding-left: 12px;
  }
`
export const InputLogin = styled.div`
 display: flex;
 flex-direction: column;
  align-items: center;
  justify-content: center;

  h3{
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
      font-size: 18px;
      margin-top: 12px;
  }
`
import styled from "styled-components";

export const PageContainer = styled.div`
  background: rgb(227,221,221);
background: radial-gradient(circle, rgba(227,221,221,0.9441128848643785) 12%, rgba(223,222,230,0.9132140084598841) 45%);
`

export const ApplicationFormHeader =  styled.div`
 height: 10vh;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 background-color: black;
 color:white;
 padding-right: 30px;
 
 button{
     margin-right: 30px;
     width: 8vw;
     border-radius: 10px;
 }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  font-size: 20px;
  input{
    font-size: 15px;
    margin: 10px 0;
  }
  width: 500px;
  select{
    font-size: 15px;
    margin: 10px 0;
  }
`

export const ContainerApplication = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  margin-top: 35px;
  button{
    margin-top: 20px;
    border-radius: 10px;
    width: 8vw;
    color: white;
    background-color: black;
  }
  
`
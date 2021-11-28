import styled from "styled-components";

export const PageCreateContainer=styled.div`
  background: rgb(227,221,221);
background: radial-gradient(circle, rgba(227,221,221,0.9441128848643785) 12%, rgba(223,222,230,0.9132140084598841) 45%);
`

export const CreateForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  font-size: 20px;
  width: 100%;
  border: 1px solid black;
  h1{
    margin: 22px 0;
  }
  input{
    margin: 10px 0;
    font-size: 15px;
  }
  button{
    margin-top: 20px;
    border-radius: 10px;
    width: 8vw;
    color: white;
    background-color: black;
  }
`

export const CreateTripHeader = styled.div`
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
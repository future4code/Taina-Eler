import styled from "styled-components"

export const AdminPageContainer = styled.div`
  background: rgb(227,221,221);
background: radial-gradient(circle, rgba(227,221,221,0.9441128848643785) 12%, rgba(223,222,230,0.9132140084598841) 45%);
`

export const AdminHomePageHeader = styled.div`
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
export const AdminHomeBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  align-items: center;
  padding-top: 40px;
  h1{
    margin-bottom: 20px;
  }
`
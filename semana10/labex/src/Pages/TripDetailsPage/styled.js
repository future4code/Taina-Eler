import styled from "styled-components";

export const PageDetailsContainer = styled.div`
  background: rgb(227,221,221);
background: radial-gradient(circle, rgba(227,221,221,0.9441128848643785) 12%, rgba(223,222,230,0.9132140084598841) 45%);
`
export const  TripDetailPageContainer = styled.div`
 min-height: 90vh;
 display: flex;
 flex-direction: column;
 align-items: center;
`

export const TripDetailHeader = styled.div`
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
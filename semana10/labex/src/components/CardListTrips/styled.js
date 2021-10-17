import styled from "styled-components"

export const CardListTripsContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding: 5px;
  width: 30%;
  background-color: white;

  div{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  }

  margin-top: 25px;
  border-radius: 2px;
  box-shadow: 1px 1px 4px black;

  button{
    margin-top: 20px;
    border-radius: 10px;
    width: 8vw;
    color: white;
    background-color: black;
  }
`
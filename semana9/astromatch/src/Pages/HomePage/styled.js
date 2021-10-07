import styled from "styled-components"

export const HomePageContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

`
export const MainContainer = styled.div`
  width: 400px;
  border:1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px;
  padding: 12px;
  border-radius: 10px;
  background-color: white;

`
export const ChooseButton = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-around;
  p{
      cursor: pointer;
      font-size: 40px;
  }
`
export const MatchButton = styled.div`
  width: 100%;
  border-bottom:1px solid black;
  div > p:hover {
    width: 20%;
    color: red;
    cursor: pointer;
    border-radius: 5px;
  }
`
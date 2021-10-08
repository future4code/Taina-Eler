import styled from "styled-components"

export const MatchPageContainer = styled.div`
  display: flex;
   align-items: center;
   justify-content: center;

`
export const MatchPeopleContainer = styled.div`
  width: 386px;
  height: 530px;
  border:1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  padding: 12px;
  border-radius: 10px;
  background-color: white;
  
`
export const HeaderMatches = styled.div`
   display: flex;
    justify-content: space-around;
    width: 100%;
    top:0px;
    border-bottom: 2px solid black;
    margin-bottom: 40px;

    p:hover{
    width: 20%;
    color: red;
    cursor: pointer;
    }
`

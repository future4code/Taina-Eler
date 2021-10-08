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
  box-shadow: 2px 2px 5px black;

  
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
  border-bottom:2px solid black;
  div{
    display: flex;
    justify-content: space-around;

    p:hover{
      width: 20%;
    color: red;
    cursor: pointer;
    }
    
  }
`
export const Refresh = styled.div`
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
  justify-content: center;
  box-shadow: 2px 2px 5px black;

  div{
    height: 60%;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    strong{
    font-size: 45px;
  }
  p{
    font-size: 45px;
    cursor: pointer;
    color: red;
    :hover{
      color:black;
    }
  }
  h5{
    font-size: 20px;
  }
  }

  

`
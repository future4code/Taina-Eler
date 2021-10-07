import React, { useState } from 'react'
import HomePage from "./Pages/HomePage/HomePage"
import MatchPage from "./Pages/MatchPage/MatchPage"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
   padding:0;
   margin:0;
   box-sizing:border-box;
  }
 
`
const GlobalDiv = styled.div`
  background-color: lightgray;
`

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const choosePage = (pageName) => {
    setCurrentPage(pageName)
  }


  const changePage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage choosePage={choosePage} />
      case "match":
        return <MatchPage choosePage={choosePage} />
      default:
        return <HomePage choosePage={choosePage} />
    }
  }

  return (
    <GlobalDiv>
      <GlobalStyle/>
      {changePage()}
    </GlobalDiv>
  );
}

export default App;

import React, { useState } from 'react'
import HomePage from "./Pages/HomePage/HomePage"
import MatchPage from "./Pages/MatchPage/MatchPage"
import styled, { createGlobalStyle } from "styled-components"
import axios from 'axios'

const GlobalStyle = createGlobalStyle`
  *{
   padding:0;
   margin:0;
   box-sizing:border-box;
  }
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

  const clearProfiles = ()=>{
    const url3 = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/taina-soares-maryam/clear"
    const headers = "Content-Type: application/json"
    axios.put(url3, headers)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err.response)
    })
  }
  return (
    <div>
      <GlobalStyle/>
      {changePage()}
      <button onClick={clearProfiles}>CLEAR</button>
    </div>
  );
}

export default App;

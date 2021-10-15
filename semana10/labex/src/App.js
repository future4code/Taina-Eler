import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Router from './components/Router/Router'
import { Footer } from './components/Footer/Footer'

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {
 
  return (
    <div>
      <GlobalStyled/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;

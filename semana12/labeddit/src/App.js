import { ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react"
import theme from "./constants/theme";
import { GlobalContext } from "./contexts/GlobalContext";
import Router from "./routes/Router"

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")
  
  return (
    <GlobalContext.Provider value={{ rightButtonText, setRightButtonText }}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;

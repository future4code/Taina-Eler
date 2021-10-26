import  React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import {ToolbarButton} from "./styled"
import {goToFeed, goToLogin} from "../../routes/coordinator"
import { useHistory } from 'react-router-dom';
import {GlobalContext} from "../../contexts/GlobalContext"


const Header = () => {
    const history = useHistory()
    const token = localStorage.getItem("token")
    
    const { rightButtonText, setRightButtonText } = useContext(GlobalContext);

    const logout = () =>{
      localStorage.removeItem("token")
    }

    const rightButtonAction = () =>{
      if(token){
        logout()
        setRightButtonText("Login")
        goToLogin(history)
      }else{
        goToLogin(history)
      }
    }

  return (
      <AppBar position="static">
        <ToolbarButton>
          <Button onClick={() => goToFeed(history)}color="inherit">LabEddit</Button>
          <Button onClick={rightButtonAction}color="inherit">{rightButtonText}</Button>
        </ToolbarButton>
      </AppBar>
  );
}

export default Header
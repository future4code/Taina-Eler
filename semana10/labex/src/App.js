import React, {useState} from 'react'
import HomePage from "./Pages/HomePage/HomePage"
import ListTripsPage from "./Pages/ListTripsPage/ListTripsPage"
import ApplicationFormPage from "./Pages/ApplicationFormPage/ApplicationFormPage"
import LoginPage from "./Pages/LoginPage/LoginPage"
import AdminHomePage from "./Pages/AdminHomePage/AdminHomePage"
import CreateTripPage from "./Pages/CreateTripPage/CreateTripPage"
import TripDetailsPage from "./Pages/TripDetailsPage/TripDetailsPage"

function App() {
  const[currentPage, setCurrentPage] = useState("home")

  const changePage = () =>{
    switch(currentPage){
      case "home":
        return <HomePage choosePage={choosePage}/>
      case "listTrips":
        return <ListTripsPage choosePage={choosePage}/>
      case "form":
        return <ApplicationFormPage choosePage={choosePage}/>
      case "login":
        return <LoginPage choosePage={choosePage}/>
      case "admin":
        return <AdminHomePage choosePage={choosePage}/>
      case "create":
        return <CreateTripPage choosePage={choosePage}/>
      case "details":
        return <TripDetailsPage choosePage={choosePage}/>
      default:
        return <HomePage/>
    }
  }

  const choosePage = (pageName) =>{
    setCurrentPage(pageName)
  }
  return (
    <div>
      {changePage()}
    </div>
  );
}

export default App;

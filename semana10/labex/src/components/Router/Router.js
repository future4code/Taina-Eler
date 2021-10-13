import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AdminHomePage from '../../Pages/AdminHomePage/AdminHomePage'
import ApplicationFormPage from '../../Pages/ApplicationFormPage/ApplicationFormPage'
import CreateTripPage from '../../Pages/CreateTripPage/CreateTripPage'
import HomePage from '../../Pages/HomePage/HomePage'
import ListTripsPage from '../../Pages/ListTripsPage/ListTripsPage'
import LoginPage from '../../Pages/LoginPage/LoginPage'
import TripDetailsPage from '../../Pages/TripDetailsPage/TripDetailsPage'

const Router = () =>{
    return(
        <BrowserRouter>
           <Switch>
               <Route exact path={"/"}>
                   <HomePage/>
               </Route>
               <Route exact path={"/trips/list"}>
                   <ListTripsPage/>
               </Route>
               <Route exact path={"/trips/application"}>
                   <ApplicationFormPage/>
               </Route>
               <Route exact path={"/login"}>
                   <LoginPage/>
               </Route>
               <Route exact path={"/admin/trips/list"}>
                   <AdminHomePage/>
               </Route>
               <Route exact path={"/admin/trips/create"}>
                   <CreateTripPage/>
               </Route>
               <Route exact path={"/admin/trips/:id"}>
                   <TripDetailsPage/>
               </Route>
           </Switch>
        </BrowserRouter>
    )
}

export default Router
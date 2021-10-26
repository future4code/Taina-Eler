import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/index"
import SingUpPage from "../pages/SingUpPage/index"
import FeedPage from "../pages/FeedPage/index"
import PostPage from "../pages/PostPage/index"
import ErrorPage from "../pages/ErrorPage/index"
import Header from "../components/Header/index"

const Router = () =>{
    return(
        <BrowserRouter>
        <Header/>
          <Switch>
              <Route exact path={"/login"}>
                  <LoginPage/>
              </Route>
              <Route exact path={"/cadastro"}>
                  <SingUpPage/>
              </Route>
              <Route exact path={"/"}>
                  <FeedPage/>
              </Route>
              <Route exact path={"/post/:id"}>
                  <PostPage/>
              </Route>
              <Route>
                  <ErrorPage/>
              </Route>
          </Switch>
        </BrowserRouter>
    )
}

export default Router
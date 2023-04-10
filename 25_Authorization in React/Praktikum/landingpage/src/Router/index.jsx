import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from "../Pages/LandingPage"
import Product from "../Pages/Product"
import SingleProduct from "../Pages/SingleProduct"
import PrivateRoute from "../component/PrivateRoute/PrivateRoute"
import { useState } from "react";
import Login from "../Pages/Login"

const Router = () => {
    const [isAuth, setIsAuth] = useState(false)
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route Component={Login} path="/login"/>
            <Route Component={<PrivateRoute user={isAuth}/>}>
                <Route path="/Product" Component={Product}/>
            </Route>
            <Route path="/" exact Component={LandingPage}/>
            <Route path="/SingleProduct/:id" Component={SingleProduct}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router
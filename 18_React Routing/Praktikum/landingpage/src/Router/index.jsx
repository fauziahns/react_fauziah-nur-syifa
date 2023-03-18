import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from "../Pages/LandingPage"
import Product from "../Pages/Product"

const Router = () => {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" exact Component={LandingPage}/>
            <Route path="/Product" Component={Product}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router
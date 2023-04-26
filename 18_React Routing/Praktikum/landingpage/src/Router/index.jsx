import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from "../Pages/LandingPage"
import Product from "../Pages/Product"
import SingleProduct from "../Pages/SingleProduct"

const Router = () => {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" exact Component={LandingPage}/>
            <Route path="/Product" Component={Product}/>
            <Route path="/SingleProduct/:id" Component={SingleProduct}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router
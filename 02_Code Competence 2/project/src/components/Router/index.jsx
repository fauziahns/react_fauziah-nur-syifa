import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from "../Pages/About"
import Landingpage from "../Pages/Landingpage"

const Router = () => {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" exact Component={Landingpage}/>
            <Route path="/About" Component={About}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router
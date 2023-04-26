import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from "../Pages/LandingPage"
import Product from "../Pages/Product"
import SingleProduct from "../Pages/SingleProduct"
import EditProduct from "../Pages/EditProduct"
import Login from "../Pages/Login"

const Router = () => {
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if(user){
    //             const uid = user.uid
    //             console.log(user);
    //         }else {
    //             console.log('user telah logout');
    //         }
    //     })
    // })
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" exact Component={LandingPage}/>
            <Route path="/Product" Component={Product}/>
            <Route path="/SingleProduct/:id" Component={SingleProduct}/>
            <Route path="/edit/:i" Component={EditProduct}/>
            <Route path="/login" Component={Login}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router
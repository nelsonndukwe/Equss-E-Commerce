import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'
import Signup from '../pages/Signup'



const Routers = () => {
    return (

        <>
        <BrowserRouter>
        <Routes>
            <Route path='home'  element={<Home/>}/>
            <Route path='cart'  element={<Cart/>}/>
            <Route path='checkout'  element={<Checkout/>}/>
            <Route path='login'  element={<Login/>}/>
            <Route path='shop'  element={<Shop/>}/>
            <Route path='shop/:id'  element={<ProductDetails/>}/>
            <Route path='signup' element={<Signup/>}/>
            
        </Routes>


        </BrowserRouter>




        </>
        
    



    )
}

export default Routers


import { useState } from "react";
import React from 'react';
import './App.css';
import Header from "./Component/Header"
import Navbar from './Component/Navbar';
import CartData from "./Component/cartData"
import {Footer} from './Component/Footer'


function App() {
    let [count, setCount] = useState(0);
    return <>

        {/* Calling the function */}
        <Navbar data={{ count, setCount }} />
        <Header />
        <CartData count={count} setCount={setCount} />
        <Footer/>

    </>
}

export default App;
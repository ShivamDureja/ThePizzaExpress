import React from "react";
import classes from "../Layout/Header.module.css";
import myImage from "../assets/My Pizza.jpg";
import HeaderCartButton from "./HeaderCartButton";


const Header = props =>{
    return  (
    <React.Fragment>
        <header  className= {classes.header}>
            <h1>ThePizzaExpress</h1>
            <HeaderCartButton onClick = {props.onShowCart}/>
        </header>
        <div className = {classes.main}>
            <img src = {myImage} alt = "A beautiful stack of pizzas" />
        </div>
    </React.Fragment>
    );
};

export default Header;
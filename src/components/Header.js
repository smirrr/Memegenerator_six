import React from "react"
import logo from "../images/logo.png"

export default function Header(){
    return(
        <div className="header">
            <img src={logo} className="logo" />
            <h2 className="title">Meme Generator</h2>
            <h4 className="courseproject">React Course - Project 3</h4>
        </div>
    )
}
import React from "react"
import Image from "next/image"
import rotatingLogo from "../assets/images/rotatinglogo.gif"

const Main = ({ images }) => {
  return (
    <div id="hero-home" className="hero">
      <Image src={rotatingLogo} alt="logo" height="150" width="300"/>
      <div id="home" className="page">
        <button className="btn_nav projects_link">Merch</button>
        <button className="btn_nav music_link">Music</button>
        <button className="btn_nav home_link">Home</button>
        <button className="btn_nav_regular about_button">About</button>
      </div>
    </div>
  )
}

export default Main

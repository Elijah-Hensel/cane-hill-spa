import React from "react"
import Image from "next/image"
import rotatingLogo from "../assets/images/rotatinglogo.gif"
import Navigation from "./Navigation"

const Main = ({ images }) => {
  return (
    <div id="hero-home" className="hero">
      <Image src={rotatingLogo} alt="logo" height="150" width="300"/>
      <Navigation />
    </div>
  )
}

export default Main

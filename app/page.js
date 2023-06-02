"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import { useIntersectionObserver } from "@uidotdev/usehooks"
import AboutModal from "./components/AboutModal"
import Main from "./components/Main"
import Merch from "./components/Merch"

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  })
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
    >
      <AwesomeSlider bullets={false} className="w-screen h-screen">
        <div className="w-full h-full">
          <Main />
        </div>
        <div className="oversize">
          <iframe
            src="https://www.youtube.com/embed/tBaEg4H5vpQ?autoplay=1"
            title="Blood and Honey by Cane Hill"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullscreen={false}
            className="w-full h-full"
            autoplay
          ></iframe>
        </div>
        <div className="w-full h-full">
          <Merch />
        </div>
        <div className="oversize">
          <iframe
            src="https://www.youtube.com/embed/JByoypu2YB4?autoplay=1"
            title="Form of Protest by Cane Hill"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullscreen={false}
            className="w-full h-full"
          ></iframe>
        </div>
      </AwesomeSlider>

      {isOpen && <AboutModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </motion.main>
  )
}

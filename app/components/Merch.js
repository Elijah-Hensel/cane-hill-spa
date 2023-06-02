import React from "react"
import { motion } from "framer-motion"

const Merch = ({ images }) => {
  return (
    <div id="hero-merch" className="hero">
      <div id="merch" className="page">
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 2, transition: { duration: 1 } }}
        >
          <a href="https://store.wearecanehill.com" target="_blank">
            <button className="btn_merch projects_link">Shop now!</button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Merch

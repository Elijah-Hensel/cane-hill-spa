import { motion } from "framer-motion"

export default function AboutModal(props) {
  const { isOpen, setIsOpen } = props

  const variants = {
    hidden: { opacity: 0, x: 0, y: 200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 100, y: 0 },
  }

  // const show = {
  //   opacity: 1,
  //   x: 100,
  // }

  // const hide = {
  //   opacity: 0,
  //   transitionEnd: {
  //     display: "none",
  //   },
  // }

  // initial="hidden"
  //           animate="enter"
  //           exit="exit"
  //           variants={variants}
  //           transition={{ type: 'linear' }}

  // if (!isOpen) return null

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      variants={variants}
      transition={{ type: "linear" }}
      className=""
    >
      <section id="about" className="bottom">
        <div className="modal">
          <p className="info">
            Cane Hill is an American heavy metal band formed in New Orleans,
            Louisiana, in 2011. The band consists of vocalist Elijah Witt,
            guitarist James Barnett, bassist Ryan Henriquez, and drummer Devin
            Clark. In 2015, the band signed to Rise Records, releasing their
            debut self-titled EP, Cane Hill. In 2016, the band released their
            debut full-length studio album, Smile. On January 19, 2018, their
            sophomore album Too Far Gone, was released, again via Rise Records.
            Too Far Gone was critically acclaimed, featuring the singles "Too
            Far Gone, "It Follows", "Lord of Flies" and "10¢". In late 2019, the
            band left Rise Records and became independent. As of 2021, the band
            has released two studio albums: Smile (2016) and Too Far Gone
            (2018), and three EPs: Cane Hill (2014), Kill the Sun (2019) and
            Krewe de la Mort Vol. 1 (2021). Cane Hill is currently recording
            material for two subsequent volumes of Krewe de la Mort Vol. 1, from
            which the songs "Power of the High" and "Kill Me" were released in
            late 2020. In February 2021, the band released the final single of
            Vol. 1 with "God Is the Enemy" during a Youtube livestream. On April
            30, the music video for the first single from Vol. 2, "Blood &
            Honey" was released along with a music video.
          </p>
        </div>
        <button
          className="absolute top-0 right-0 h-16 w-16 pr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          CLOSE
        </button>
      </section>
    </motion.div>
  )
}

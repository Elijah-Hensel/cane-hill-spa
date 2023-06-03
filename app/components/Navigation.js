import Link from "next/link"

export default function Navigation() {
  return (

      <div id="home" className="page">
        <Link  href="/">
          <button className="btn_nav">Home</button>
        </Link>
        <Link  href="https://store.wearecanehill.com">
          <button className="btn_nav">Merch</button>
        </Link>
        <Link  href="https://open.spotify.com/artist/0DZKzOGHDqGaf1N2pmsBRZ?si=h6XJOdXGTASJsOhdbvk9mA">
          <button className="btn_nav">Music</button>
        </Link>
        <Link  href="https://en.wikipedia.org/wiki/Cane_Hill_(band)">
          <button className="btn_nav">About</button>
        </Link>
      </div>
  )
}

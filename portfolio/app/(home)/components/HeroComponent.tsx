import Link from 'next/link'
import React from 'react'

export default function HeroComponent() {
  return (
      <div>
          <div>
              <h1>Namaste!🙏🏽 <br />
                  <span>{"I'm Aakash."}</span>
              </h1>
              <p>
                  {
                      "Based in India, I'm a Fullstack developer passionate about building a modern web application that users love."
                  }
              </p>
              <Link href={"mailto:aakash.ar1213@gmail.com"}>
                  <div>
                      <h1> Contact Me📬</h1>
             </div>
              </Link>
          </div>
    </div>
  )
}

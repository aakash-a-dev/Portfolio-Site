import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Navbar() {
    const Socials = [
        {
            link: "https://www.linkedin.com/in/aakash-a-rajput/",
            label: "LinkedIn",
            Icon: SiLinkedin
        },
        {
            link: "https://github.com/aakash-a-dev",
            label: "GitHub",
            Icon: SiGithub
        },
          {
            link: "https://twitter.com/aakashadev",
            label: "X",
            Icon: SiX
        },
        
    ]
  return (
      <div>
          <nav>
              <h1>AAR 🧑🏽‍💻</h1>
          </nav>
          <div>
              {Socials.map((social, index) => {
                  const Icon = social.Icon
                  return <Link href={social.link} key={index} aria-label={social.label}>
                      <Icon/>
                  </Link>
              })}
          </div>
    </div>
  )
}

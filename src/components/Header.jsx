import React from "react"
import { Link } from "gatsby"

export default function Header() {
  const siteTitle = "Amici di Montaldo"
  return (
    <header id="header">
      <h1><Link  to="/">
        {siteTitle}
      </Link></h1>
	  </header>
  )
}
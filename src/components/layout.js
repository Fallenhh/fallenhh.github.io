import React from "react"
import { Link } from "gatsby"
import "../styles/global.sass"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div className="main-content">
      <div className="header-container">
        <div className="site-title"> Atelier Fallenhh </div>
        <ul>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
        <div style={{ clear: "both"}}></div>
      </div>
      {children}
    </div>
  )
}
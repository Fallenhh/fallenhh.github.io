import React from "react"
import { Link } from "gatsby"
import "../styles/global.sass"
import Avatar from "../../static/avatar.jpg"
import { Helmet } from "react-helmet"

const ListLink = props => (
  <li className="site-link">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <title> Atelier Fallen </title>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" />
      </Helmet>
      <div className="main-inner">
        <div className="sidebar">
          <div className="sidebar-banner"></div>
          <div className="profile-container">
            <img className="profile-pic" src={Avatar} alt="Nameless"/>
          </div>
          <div className="author-container">
            Fallenhh
          </div>
          <div className="author-description">
            悲しみのない自由な空へ 翼はためかせ
          </div>
          <div className="social-list">
            <Link className="social-link" to={"https://twitter.com/Fallenhh2"}> Twitter </Link>
            <Link className="social-link" to={"https://aemail.com/QWLM"}> Email </Link>
            <Link className="social-link" to={"https://github.com/Fallenhh"}> Github </Link>
          </div>
        </div>
        <div className="main-content">
          <div className="banner-container"></div>
          <div className="header-container">
            <div className="site-title"> Atelier Fallenhh </div>
            <ul className="site-nav">
              <ListLink to="/">Home</ListLink>
              <ListLink to="/about/">About</ListLink>
              <ListLink to="/contact/">Contact</ListLink>
            </ul>
            <div style={{ clear: "both"}}></div>
          </div>
          {children}
        </div>
      </div>
      
    </div>
  )
}
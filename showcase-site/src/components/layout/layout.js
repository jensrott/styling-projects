import React from "react"
import PropTypes from "prop-types"

import Header from "../header/header"
import Footer from "../footer/footer"

import "./normalize.css"
import "./main.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container">{children}</div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

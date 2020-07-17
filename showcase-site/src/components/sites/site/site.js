import React from "react"
import PropTypes from "prop-types"

import "./site.css"

const Site = ({ site }) => {
  return (
    <a
      className="site"
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      title={site.tooltip}
    >
      <h1 className="site__title">{site.title}</h1>
      <img className="site__image" src={site.image} alt="site" />
    </a>
  )
}

Site.propTypes = {
  site: PropTypes.object.isRequired,
}

export default Site

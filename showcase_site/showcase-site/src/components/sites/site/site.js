import React from "react"
import PropTypes from "prop-types"

import "./site.css"

const Site = ({ site }) => {
  return (
    <div className="site">
      <h1 className="site__title">{site.title}</h1>
      <img className="site__image" src={site.image} alt="site" />
      <a
        className="site__url"
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit website
      </a>
    </div>
  )
}

Site.propTypes = {
  site: PropTypes.object.isRequired,
}

export default Site

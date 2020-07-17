import React from "react"

import sites from "../../../content/sites.json"
import Site from "../site/site"

import "./siteslist.css"

const SitesList = () => {
  return (
    <div className="sites">
      <h1 className="sites__title">Showcase</h1>
      <div className="sites__container">
        {sites.map((site, index) => (
          <Site key={index} site={site} />
        ))}
      </div>
    </div>
  )
}

export default SitesList

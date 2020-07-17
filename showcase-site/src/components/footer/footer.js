import React from "react"

import "./footer.css"

const Footer = () => (
  <footer>
    <p>
      Copyright © {new Date().getFullYear()}
      <a target="_blank" href="https://github.com/jensrott"> Jens Rottiers</a> All Rights
      Reserved.
    </p>
  </footer>
)

export default Footer

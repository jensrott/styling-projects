import React from "react"

import "./footer.css"

const Footer = () => (
  <footer>
    <p>
      Copyright © {new Date().getFullYear()}
      <a href="https://github.com/jensrott"> Jens Rottiers</a> All Rights
      Reserved.
    </p>
  </footer>
)

export default Footer

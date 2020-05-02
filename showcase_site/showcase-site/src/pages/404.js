import React from "react"
import Layout from "../components/layout/layout"
import Link from "gatsby-link"

const Page404 = () => {
  return (
    <Layout>
      <h1>Woops you visited a page that doesn't exist!</h1>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default Page404

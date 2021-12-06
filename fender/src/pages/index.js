import * as React from 'react'
import { useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <h1>Welcome to Home</h1>
        <p>Lorem ipsum</p>
      </main>
    </Layout>
  )
}

export default IndexPage
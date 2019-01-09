import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>This site is being migrated to Gatsby 2.0.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export default IndexPage

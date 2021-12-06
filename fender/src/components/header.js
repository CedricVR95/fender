import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <header>
      <div>
        {data.site.siteMetadata.title}
      </div>
      <div>
        <p style={{ margin: 0 }}>
          <Link to="/">Home</Link>
        </p>
        <p style={{ margin: 0 }}>
          <Link to="/guitars">Guitars</Link>
        </p>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

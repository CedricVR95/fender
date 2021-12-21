import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import {container, title, navContainer, link} from './header.module.css'

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
    <header className={container}>
      <div className={title}>
        {data.site.siteMetadata.title}
      </div>
      <div className={navContainer}>
        <p style={{ margin: 0 }}>
          <Link to="/" className={link}>Home</Link>
        </p>
        <p style={{ margin: 0 }}>
          <Link to="/guitars" className={link}>Guitars</Link>
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

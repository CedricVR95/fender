import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"

const GuitarPage = ({ data: {wpGuitar: {guitarFields: guitar}}}) => {
  const image = getImage(guitar.image.localFile)
  return (
    <Layout>
      <main>
        <h1>{guitar.specifications.nameModel}</h1>
        <div>
          <h3>Built in</h3>
          <p>{guitar.specifications.builtIn}</p>
        </div>        
        <div>
          <h3>Wood Type Body</h3>
          <p>{guitar.specifications.woodBody}</p>
        </div>
        <div>
          <h3>Wood Type Neck</h3>
          <p>{guitar.specifications.woodNeck}</p>
        </div>
        <div>
          <h3>Wood Type Fretboard</h3>
          <p>{guitar.specifications.woodFretboard}</p>
        </div>
        <div>
          <h3>Colour</h3>
          <p>{guitar.specifications.colour}</p>
        </div>
        <div>
          <h3>Paint Type</h3>
          <p>{guitar.specifications.typeOfPaint}</p>
        </div>
        <div>
          <h3>Pickups</h3>
          <p>{guitar.specifications.pickups}</p>
        </div>
        <GatsbyImage
          image={image}
          alt={guitar.image.altText}
        />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpGuitar(id: { eq: $id }) {
      guitarFields {
        specifications {
          nameModel
          builtIn
          colour
          typeOfPaint
          woodBody
          woodFretboard
          woodNeck
          pickups
        }
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 200, transformOptions: {fit: INSIDE})
            }
          }
          altText
        }
      }
    }
  }
`

export default GuitarPage

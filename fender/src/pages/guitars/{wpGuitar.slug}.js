import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"

const GuitarPage = ({ data }) => {
  const image = getImage(data.wpGuitar.guitarFields.image.localFile)
  console.log(data)
  return (
    <Layout>
      <main>
        <h1>{data.wpGuitar.guitarFields.specifications.nameModel}</h1>
        <GatsbyImage
          image={image}
          alt={data.wpGuitar.guitarFields.image.altText}
          style={{ height: 100 }}
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
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
      }
    }
  }
`

export default GuitarPage

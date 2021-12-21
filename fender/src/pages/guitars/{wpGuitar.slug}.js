import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import {
  outerContainer,
  innerContainer,
  name,
  builtIn,
  woodBody,
  woodNeck,
  woodFret,
  colour,
  paint,
  pickups,
  guitarImage,
} from "./guitar.module.css"

const GuitarPage = ({
  data: {
    wpGuitar: { guitarFields: guitar },
  },
}) => {
  const image = getImage(guitar.image.localFile)
  return (
    <Layout>
      <main className={outerContainer}>
        <div className={innerContainer}>
          <h1 className={name}>{guitar.specifications.nameModel}</h1>
          <div className={builtIn}>
            <h3 style={{textDecoration:"underline"}} style={{textDecoration:"underline"}}>Built in</h3>
            <p>{guitar.specifications.builtIn}</p>
          </div>
          <div className={woodBody}>
            <h3 style={{textDecoration:"underline"}}>Wood Type Body</h3>
            <p>{guitar.specifications.woodBody}</p>
          </div>
          <div className={woodNeck}>
            <h3 style={{textDecoration:"underline"}}>Wood Type Neck</h3>
            <p>{guitar.specifications.woodNeck}</p>
          </div>
          <div className={woodFret}>
            <h3 style={{textDecoration:"underline"}}>Wood Type Fretboard</h3>
            <p>{guitar.specifications.woodFretboard}</p>
          </div>
          <div className={colour}>
            <h3 style={{textDecoration:"underline"}}>Colour</h3>
            <p>{guitar.specifications.colour}</p>
          </div>
          <div className={paint}>
            <h3 style={{textDecoration:"underline"}}>Paint Type</h3>
            <p>{guitar.specifications.typeOfPaint}</p>
          </div>
          <div className={pickups}>
            <h3 style={{textDecoration:"underline"}}>Pickups</h3>
            <p>{guitar.specifications.pickups}</p>
          </div>
          <GatsbyImage
            image={image}
            alt={guitar.image.altText}
            className={guitarImage}
          />
        </div>
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
              gatsbyImageData(
                placeholder: BLURRED
                height: 200
                transformOptions: { fit: INSIDE }
              )
            }
          }
          altText
        }
      }
    }
  }
`

export default GuitarPage

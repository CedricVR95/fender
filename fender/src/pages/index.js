import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({
  data: {
    wpPage: { homepagefields: homeMeta },
  },
}) => {
  const image = getImage(homeMeta.bannerImage.localFile)
  return (
    <Layout>
      <main>
        <h1>{homeMeta.title}</h1>
        <h2>{homeMeta.description}</h2>
        <GatsbyImage image={image} alt={homeMeta.bannerImage.altText} />
        <div>
          <h3>{homeMeta.featuredProducts.name}</h3>
          <p>{homeMeta.featuredProducts.description}</p>
          {homeMeta.featuredProducts.product.map(guitar => {
            const image = getImage(guitar.guitarFields.image.localFile);
            return(
              <div key={guitar.id}>
                <h4>{guitar.guitarFields.specifications.builtIn} {guitar.guitarFields.specifications.colour} {guitar.guitarFields.specifications.nameModel}</h4>
                <GatsbyImage image={image} alt={guitar.guitarFields.image.altText} />
              </div>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "home" }) {
      homepagefields {
        title
        description
        featuredProducts {
          description
          name
          product {
            ... on WpGuitar {
              id
              guitarFields {
                specifications {
                  builtIn
                  colour
                  nameModel
                }
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, height: 200, width: 400, transformOptions: {fit: INSIDE})
                    }
                  }
                  altText
                }
              }
            }
          }
        }
        bannerImage {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 300, transformOptions: {fit: INSIDE})
            }
          }
          altText
        }
      }
    }
  }
`

export default IndexPage

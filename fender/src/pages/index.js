import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  outerContainer,
  innerContainer,
  title,
  description,
  bannerImage,
  featuredTitle,
  featuredDescription,
  featuredProductContainer,
  featuredProductDescription,
  imageDescription,
  featuredContainer,
} from "./index.module.css"

const IndexPage = ({
  data: {
    wpPage: { homepagefields: homeMeta },
  },
}) => {
  const image = getImage(homeMeta.bannerImage.localFile)
  return (
    <Layout>
      <main className={outerContainer}>
        <div className={innerContainer}>
          <h1 className={title}>{homeMeta.title}</h1>
          <div className={imageDescription}>
            <GatsbyImage
              image={image}
              alt={homeMeta.bannerImage.altText}
              className={bannerImage}
            />
            <h2 className={description}>{homeMeta.description}</h2>
          </div>
          <div className={featuredContainer}>
            <h3 className={featuredTitle}>{homeMeta.featuredProducts.name}</h3>
            <p className={featuredDescription}>
              {homeMeta.featuredProducts.description}
            </p>
            <div className={featuredProductContainer}>
              {homeMeta.featuredProducts.product.map(guitar => {
                const image = getImage(guitar.guitarFields.image.localFile)
                return (
                  <Link key={guitar.id} to={`/guitars/${guitar.slug}`}>
                    <h4 className={featuredProductDescription}>
                      {guitar.guitarFields.specifications.builtIn}{" "}
                      {guitar.guitarFields.specifications.colour}{" "}
                      {guitar.guitarFields.specifications.nameModel}
                    </h4>
                    <GatsbyImage
                      image={image}
                      alt={guitar.guitarFields.image.altText}
                    />
                  </Link>
                )
              })}
            </div>
          </div>
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
              slug
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
                      gatsbyImageData(
                        placeholder: BLURRED
                        height: 800
                        quality: 100
                        width: 400
                        transformOptions: { fit: INSIDE }
                      )
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
              gatsbyImageData(
                placeholder: BLURRED
                quality:100
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

export default IndexPage

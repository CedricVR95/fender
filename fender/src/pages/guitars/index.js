import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../../components/layout"
import {
  bannerImage,
  title,
  innerContainer,
  outerContainer,
  guitarsContainer,
  guitarContainer,
  guitarName,
  imageDescription,
} from "./index.module.css"

const GuitarsPage = ({ data }) => {
  console.log(data)
  const image = getImage(data.wpPage.guitarsPageFields.bannerImage.localFile)
  return (
    <Layout>
      <main className={outerContainer}>
        <div className={innerContainer}>
          <div className={imageDescription}>
          <GatsbyImage
              image={image}
              alt={data.wpPage.guitarsPageFields.bannerImage.altText}
              className={bannerImage}
            />
            <h1 className={title}>
              {data.wpPage.guitarsPageFields.description}
            </h1>
          </div>
          <div className={guitarsContainer}>
            {data.allWpGuitar.nodes.map(guitar => {
              const image = getImage(guitar.guitarFields.image.localFile)
              return (
                <div key={guitar.id} className={guitarContainer}>
                    <Link to={`/guitars/${guitar.slug}`} className={guitarName}>
                      {guitar.guitarFields.specifications.builtIn}{" "}
                      {guitar.guitarFields.specifications.nameModel}
                      <GatsbyImage
                        image={image}
                        alt={guitar.guitarFields.image.altText}
                      />
                    </Link>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "guitars" }) {
      guitarsPageFields {
        description
        bannerImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                
                quality: 100
                
              )
            }
          }
          altText
        }
      }
    }

    allWpGuitar {
      nodes {
        slug
        id
        guitarFields {
          specifications {
            nameModel
            builtIn
            colour
          }
          description
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  height: 150
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
`

export default GuitarsPage

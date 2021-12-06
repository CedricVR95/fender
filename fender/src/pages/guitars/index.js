import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../../components/layout"

const GuitarsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpGuitar {
        nodes {
          slug
          id
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
    }
  `)
  //   console.log(data.allWpGuitar.nodes);

  return (
    <Layout>
      <main>
        <h1>Welcome to products</h1>
        {data.allWpGuitar.nodes.map(guitar => {
          const image = getImage(guitar.guitarFields.image.localFile)
          return (
            <div key={guitar.id}>
              <p>
                <Link to={`/guitars/${guitar.slug}`}>
                  {guitar.guitarFields.specifications.builtIn}{" "}
                  {guitar.guitarFields.specifications.nameModel}
                </Link>
              </p>
              {/* <GatsbyImage image={image} alt={guitar.guitarFields.image.altText} style={{height: 100}}/>                 */}
            </div>
          )
        })}
      </main>
    </Layout>
  )
}

export default GuitarsPage

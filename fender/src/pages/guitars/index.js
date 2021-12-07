import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../../components/layout"

const GuitarsPage = ({ data }) => {
  console.log(data)
  const image = getImage(data.wpPage.guitarsPageFields.bannerImage.localFile)
  return (
    <Layout>
      <main>
        <h1>{data.wpPage.guitarsPageFields.description}</h1>
        <GatsbyImage image={image} alt={data.wpPage.guitarsPageFields.bannerImage.altText}/>
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
              <GatsbyImage image={image} alt={guitar.guitarFields.image.altText}/>                
            </div>
          )
        })}
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
            gatsbyImageData(placeholder: BLURRED, height: 300, transformOptions: {fit: INSIDE})
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
              gatsbyImageData(placeholder: BLURRED, height: 150, transformOptions: {fit: INSIDE})
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

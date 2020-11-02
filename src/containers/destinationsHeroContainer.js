import React from "react"
import { Cards, DestinationHero } from "../components"
import {graphql, useStaticQuery } from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


const variants = {
    hidden: { opacity: 0, y: "-100vh"  },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2, type: "tween",
        }
    }
}


const DestinationHeroContainer = () => {
    const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost(
                sort:{
                    fields: publishedDate,
                    order: DESC
                }
            ){
                edges{
                    node{
                        title
                        slug
                        description{
                            description
                        }

                    
                       
                        publishedDate(formatString:"MMMM, Do, YYYY")
                        countryImage{
                            fluid(maxWidth: 390, quality: 95){
                                ...GatsbyContentfulFluid_withWebp

                            }
                        }

                    }
                }
            }
        }
  `)

  return (
    <DestinationHero>
      <DestinationHero.Container>
        {
          data.allContentfulBlogPost.edges.map((edge) => {
            return <Cards whileHover={{
                scale: 1.03,
                transition: { duration: 1 },
            }}  key={edge.node.slug} initial="hidden" animate='visible' variants={variants} >
              <Cards.Title initial={{opacity: 0}} animate={{  scale: 1, opacity: 1, transition:{ease: "easeIn", delay: 2.5}}} >{edge.node.title}</Cards.Title>
                    <Cards.ImageWrapper whileHover={{scale: 1}}>
                        <Cards.Image  fluid={edge.node.countryImage.fluid} alt={edge.node.slug}/>
                    </Cards.ImageWrapper>

              <Cards.Description> {edge.node.description.description}</Cards.Description>
                <Cards.Date>Published: {edge.node.publishedDate}</Cards.Date>
              <Cards.Button to={`/destinations/${edge.node.slug}`}>Check more</Cards.Button>
            </Cards>
          })
        }
      </DestinationHero.Container>
    </DestinationHero>
  )
}

export default DestinationHeroContainer

// {
//     documentToReactComponents(edge.node.body.json)
// }
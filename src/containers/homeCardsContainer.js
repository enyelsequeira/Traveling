import React from "react"
import {  HomeCards, SmallCards } from "../components"
import { graphql, useStaticQuery } from "gatsby"

const variants = {
  hidden: { opacity: 0, x: "-100vh"  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3, type: "spring", stiffness: 120
    }
  }
}
const HomeCardsContainer = ()=>{


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
                          fluid(maxWidth: 300, quality: 95){
                              ...GatsbyContentfulFluid_withWebp

                          }
                      }
                      

                  }
              }
          }
      }
  `)

  return <HomeCards>
    <HomeCards.Container>
     <HomeCards.TitleContainer>
     <HomeCards.Title>Featured Destinations</HomeCards.Title>
       <HomeCards.TitleLink to='/destinations'>Check More</HomeCards.TitleLink>
     </HomeCards.TitleContainer>
      <HomeCards.ContainerImage>
        {
          data.allContentfulBlogPost.edges.slice(0,4).map((edge) => {
            return <SmallCards whileHover={{ scale: 1.1}}
              initial="hidden" animate='visible' variants={variants}
              key={edge.node.slug}>
              <SmallCards.CardsImageContainer  to={`/destinations/${edge.node.slug}`} >
                <SmallCards.CardsImage    fluid={edge.node.countryImage.fluid}>
                  <SmallCards.CardsTitle>{edge.node.title}</SmallCards.CardsTitle>
                </SmallCards.CardsImage>
              </SmallCards.CardsImageContainer>

            </SmallCards>
          })
        }

      </HomeCards.ContainerImage>




    </HomeCards.Container>
  </HomeCards>
}
export default HomeCardsContainer
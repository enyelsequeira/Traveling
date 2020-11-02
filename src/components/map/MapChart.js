import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components/macro"
import {navigate} from 'gatsby'; //import navigate from gatsb


const Wrapper = styled.div`
border: 2px solid #1b1e2e;
width: 60%;
margin: 5rem auto;
border-radius: 50px;
box-shadow: 10px 10px 20px #1b1e2e;
@media screen and (max-width: 900px){
width: 95%;

}

`



const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};


const MapChart = ({ setTooltipContent }) => {
  const data = useStaticQuery(graphql`
      query{
          allContentfulBlogPost{
              edges{
                  node{
                      title
                      slug
                  }
              }
          }
      }
  `)

  return (
    <Wrapper>
      <h1 style={{textAlign:"center", margin: "1rem 0"}}>Destinations Map</h1>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  }}
                  onClick={(e) => {
                    const { NAME_LONG} = geo.properties;
                    let resolve = null;
                    data.allContentfulBlogPost.edges.find((edge) => {
                      if(edge.node.slug === NAME_LONG.toLowerCase()){
                        resolve= edge.node.slug;
                        console.log(edge.node.slug, NAME_LONG.toLowerCase())
                        return navigate(`/destinations/${edge.node.slug}`)
                      }
                    })
                   // return resolve ? null : console.log("you have not been there")
                    if(!resolve) return alert("Sorry we have not been there yet")

                  }}

                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#FB8F1D",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </Wrapper>
  );
};

export default memo(MapChart);

import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

/**
 * Change the content to add your own bio
 */

export default props => {
  const { author, description, social } = useSiteMetadata()
  return (
    <Fragment>
      {`Personal blog by `}
      <Styled.a href={social.find(s => s.name === "twitter")?.url}>
        {author}
      </Styled.a>
      <br />
      {description}
    </Fragment>
  )
}

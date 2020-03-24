import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

/**
 * Change the content to add your own bio
 */

export default props => {
  const { company, learn, location } = useSiteMetadata()
  return (
    <Fragment>
      {`I live in ${location} and work at ${company}.`}
      <br />I learn: {learn}
    </Fragment>
  )
}

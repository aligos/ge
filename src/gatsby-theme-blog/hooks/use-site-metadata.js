import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            company
            description
            learn
            location
            technologies
            social {
              name
              url
            }
            title
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata

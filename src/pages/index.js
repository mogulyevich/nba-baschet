import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

import FeaturedPost from "../components/featuredPost"
import MainContent from "../components/mainContent"

import SEO from "../components/seo"

export default function Home() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <html lang="en" />
      </Helmet>
      <SEO title="Your News Platform For All NBA" description={data.site.siteMetadata.description} />
      <Layout>
        <FeaturedPost />
        <MainContent />
      </Layout>
    </>
  )
}

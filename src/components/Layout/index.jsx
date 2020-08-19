import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '@/components/Header'
import GlobalStyle from '@/styles/global.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  )
}

export default Layout

import React from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import 'animate.css'
import LanguageProvider from '../context/index'

const IndexPage = () => (
  <LanguageProvider>
    <Layout>
      <SEO />
    </Layout>
  </LanguageProvider>
)

export default IndexPage

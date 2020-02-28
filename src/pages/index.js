import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeadLine from "../components/head-line"
import Industries from "../components/industries"
import ValueProp from "../components/value-prop"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import HeadNav from '../components/head-nav'
import CallToAction from '../components/call-to-action'
import Pricing from '../components/pricing'

const IndexPage = () => (
  <Container>
    <SEO title="Home" />
    <HeadNav/>
    <HeadLine/>
    <Industries/>
    <ValueProp/>
    <CallToAction/>
    <Pricing/>
    <footer>
          © Lome
          {` `}
          <a href="https://www.gatsbyjs.org">Privacy & Terms</a>
          {` `}
          USA
    </footer>
  </Container>
)

export default IndexPage

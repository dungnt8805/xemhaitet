import React, { PropTypes } from "react"

import "./sass/main.scss"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Ga from "./components/Ga"

const AppContainer = (props) => {
  return (
    <Container>
      <DefaultHeadMeta />
      <Header />
      <Content>
        { props.children }
      </Content>
      <Footer />
      <Ga params={ props.params }> </Ga>
    </Container>
  )
}

AppContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  params: PropTypes.object,
}

export default AppContainer

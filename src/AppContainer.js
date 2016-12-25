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
    <Ga params={ props.params }>
      <Container>
        <DefaultHeadMeta />
        <Header />
        <Content>
          { props.children }
        </Content>
      </Container>
      <Footer />
    </Ga>
  )
}

AppContainer.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  params: PropTypes.object,
}

export default AppContainer

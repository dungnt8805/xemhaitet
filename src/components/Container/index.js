import React, { PropTypes } from "react"

const Container = (props) => (
  <div id="wrapper">
    { props.children }
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
}

export default Container

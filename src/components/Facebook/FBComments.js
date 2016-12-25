import React, { PropTypes } from "react"

class FBComments extends React.Component {

  componentDidMount() {
    FB.XFBML.parse()
  }

  render() {
    return (
      <div className="fb-comments" href={ this.props.link } data-width="100%" data-numposts="5"></div>
    )
  }
}

FBComments.propTypes = {
  link: PropTypes.string.isRequired,
}

export default FBComments
import React, { PropTypes } from "react"

class FBLike extends React.PureComponent {

  render() {
    return (
      <div className="fb-like" href={ this.props.link } data-layout="button" data-show-faces="true" data-action="like" data-size="large" data-share="true"></div>
    )
  }
}

FBLike.propTypes = {
  link: PropTypes.string.isRequired,
}

export default FBLike
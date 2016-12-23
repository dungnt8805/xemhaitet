import React, { PropTypes } from "react"
import Link from "react-router/lib/Link"

class TagDisplay extends React.PureComponent {
  static propTypes = {
    tag: PropTypes.string.isRequired,
  };

  render() {
    return (
      <span>
        <Link
          to={ "/tag/" + this.props.tag }
          className="tag"
        >
          { "#" }
          { this.props.tag }
        </Link>
      </span>
    )
  }
}

export default TagDisplay
import React, { PropTypes } from "react"
import ga from "react-google-analytics"

const GoogleAnalyticsInitializer = ga.Initializer

const isClient = typeof window !== "undefined"

class GoogleAnalyticsTracker extends React.PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    params: PropTypes.object.isRequired,
  }

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  componentWillMount() {
    if (isClient) {
      const { pkg } = this.context.metadata
      ga("create", pkg.googleAnalyticsUA, "auto")
      this.logPageView()
    }
  }

  componentWillReceiveProps(props) {
    if (props.params.splat !== this.props.params.splat) {
      this.logPageView()
    }
  }

  logPageView() {
    if (isClient) {
      ga("set", "page", window.location.pathname)
      ga("send", "pageview")
    }
  }

  render() {
    return (
      <div>
        { this.props.children }
        <GoogleAnalyticsInitializer />
      </div>
    )
  }
}

export default GoogleAnalyticsTracker
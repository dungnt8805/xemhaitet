import React, { PropTypes } from "react"
import ga from "react-google-analytics"

const GoogleAnalyticsInitializer = ga.Initializer

const isProduction = process.env.NODE_ENV === "production"
const isClient = typeof window !== "undefined"

class GoogleAnalyticsTracker extends React.PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    params: PropTypes.object.isRequired,
  }

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  componentWillMount() {
    if (isClient) {
      const { pkg } = this.context.metadata
      if (isProduction) {
        ga("create", pkg.googleAnalyticsUA, "auto")
      }
      else {
        console.info("ga.create", pkg.googleAnalyticsUA)
      }
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
      if (isProduction) {
        ga("set", "page", window.location.pathname)
        ga("send", "pageview")
      }
      else {
        console.info("New pageview", window.location.href)
      }
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
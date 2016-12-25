import React from "react"

class Facebook extends React.PureComponent {
  constructor() {
    super()
  }

  componentDidMount() {
    (function(d, s, id) {
      const fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      const js = d.createElement(s); js.id = id
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1625144991086588"
      fjs.parentNode.insertBefore(js, fjs)
    }(document, "script", "facebook-jssdk"))
  }

  componentDidUpdate() {
    // FB.XFBML.parse()
  }

  render() {
    return (
      <div id="fb-root"></div>
    )
  }
}

export default Facebook
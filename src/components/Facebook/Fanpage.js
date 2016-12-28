import React from "react"

class Fanpage extends React.PureComponent {
  render() {
    return (
      <div className="fb-page" data-href="https://www.facebook.com/haykhodo/" data-small-header="false"
           data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"
      >
        <blockquote cite="https://www.facebook.com/haykhodo/" className="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/haykhodo/">{ "Hay Khó Đỡ" }</a>
        </blockquote>
      </div>
    )
  }
}

export default Fanpage

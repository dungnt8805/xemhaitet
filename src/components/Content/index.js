import React, { PropTypes } from "react"
import Fanpage from "../Facebook/Fanpage"

const Content = (props) => {
  return (
    <div id="wrap_content">
      <div className="container">
        <div className="page">
          <div className="content">
            <main id="main" className="site-main col-md-8 col-xs-12" role="main">
              { props.children }
            </main>
            <div className="sidebar col-md-4 hidden-small">
              <div id="sidebar" className="g">
                <div className="sidebar">
                  <Fanpage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.node,
}

export default Content

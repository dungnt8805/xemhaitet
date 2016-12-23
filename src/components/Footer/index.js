import React from "react"
import Link from "phenomic/lib/Link"

const Footer = () => (
  <footer id="footer" className="site-footer">
    <div id="site-bottom" className="clearfix">
      <div className="copyright container">
        <div className="left">
          { "\u00a9\u00a0" + new Date().getFullYear() + "\u00a0" }
          <Link to="/">
            <strong>{ "Xemhaitet" }</strong>
          </Link>
          { ". Powered by " }
          <Link to="/">{ "xemhaitet.com" }</Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

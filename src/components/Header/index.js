import React, { PropTypes } from "react"
import { Link } from "react-router"
import enhanceCollection from "phenomic/lib/enhance-collection"
import site from "../../config.yml"

const Header = (props, { metadata: { pkg }, collection }) => {
  const categories = enhanceCollection(collection, {
    filter: { type: "Category" },
    sort: "title",
    reverse: true,
  })
  return (
    <header>
      <nav className="navbar navbar-default secondary-bar navbar-fixed-top">
        <div className="container">
          <ul className="nav navbar-nav sf-menu">
            <li className="sf-menu">
              <Link to="/">
                  <span>
                    <i className="fa fa-home"></i> { "Trang chủ" }
                  </span>
              </Link>
            </li>
            <li className="dropdown primary-menu sf-menu">
              <a href="#">
                <span><i className="fa fa-tags"></i></span>
                { "Thể loại" } </a>
              { categories.length > 0 &&
                <ul className="dropdown-menu">
                  {
                    categories.map((category) => (
                      <li role="presentation" key={ category.slug }>
                        <Link to={ `/category/${category.slug}` }>{ category.title }</Link>
                      </li>
                    ))
                  }
                </ul>
              }
            </li>
            <li className="sf-menu">
              <Link to="/Actors">
                <span><i className="fa fa-users"></i></span> { "Nghệ sĩ" }
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div id="masthead" className="site-header clearfix">
        <div className="container">
          <div className="site-branding col-md-4">
            <div id="logo">
              <Link to="/" rel="home">
                <img src={ site.theme_settings.logo } alt={ site.theme_settings.title }/>
              </Link>
            </div>
          </div>
          <div className="banner-header col-md-8">
            <Link to={ site.theme_settings.banner.link } target="_blank">
              <img src={ site.theme_settings.banner.image }/>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
  collection: PropTypes.array.isRequired,
}

export default Header

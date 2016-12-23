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
  const rootCategories = categories.filter(category => (!category.parent))
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
            <li className="sf-menu">
              <Link to="/archive">
                  <span>
                    <i className="fa fa-list"></i> { "Bài viết" }
                  </span>
              </Link>
            </li>
            {
              rootCategories.map((category) => (
                <li className="dropdown primary-menu sf-menu" key={ category.__url }>
                  <Link key={ category.__url } to={ category.__url } className="dropdown-toggle" data-toggle="dropdown">
                    { category.title }
                  </Link>
                  <ul className="dropdown-menu">
                    {
                      categories.map((child) => (
                        child.parent === category.code &&
                        <li role="presentation" key={ child.__url }>
                          <Link to={ child.__url }>{ child.title }</Link>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }
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
            <Link to={ site.theme_settings.banner.link } target="_blank" >
              <img src={ site.theme_settings.banner.image } />
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

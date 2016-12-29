import React, { PropTypes } from "react"
import { Link } from "react-router"
import enhanceCollection from "phenomic/lib/enhance-collection"
import site from "../../config.yml"
import _ from "lodash"

const Header = (props, { metadata: { pkg }, collection }) => {
  const categories = enhanceCollection(collection, {
    filter: { type: "Category" },
    sort: "title",
    reverse: true,
  })
  const rootCategories = categories.filter(category => (!category.parentId))
  for (let i = 0; i < rootCategories.length; i++) {
    const childs = categories.filter(child => (child.parentId === rootCategories[i].slug))
    if (childs.length > 0) {
      for (let j = 0; j < childs.length; j++) {
        const grands = categories.filter(grand => (grand.parentId === childs[j].slug))
        if (grands.length > 0) {
          childs[j].childs = grands;
        }
      }
      rootCategories[i].childs = childs;
    }
  }
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
              <ul className="dropdown-menu" role="menu">
                {
                  rootCategories.map((category) => (
                    <li role="presentation" key={ category.__url } className={ `sf-menu ${category.childs ? "dropdown-submenu" : ""}` }>
                      <Link to={ `/category/${category.slug}` }>{ category.title }</Link>
                      {
                        category.childs && category.childs.length > 0 &&
                        (
                          <ul className="dropdown-menu">
                            {
                              category.childs.map((child) => (
                                <li role="presentation" key={ child.__url } className={ `sf-menu ${child.childs ? "dropdown-submenu" : ""}` }>
                                  <Link to={ child.__url }>{ child.display || child.title }</Link>
                                  {
                                    child.childs && child.childs.length > 0 &&
                                    (
                                      <ul className="dropdown-menu">
                                        {
                                          child.childs.map((grand) =>(
                                            <li role="presentation" key={ grand.__url }>
                                              <Link to={ grand.__url }>{ grand.display || grand.title }</Link>
                                            </li>
                                          ))
                                        }
                                      </ul>
                                    )
                                  }
                                </li>
                              ))
                            }
                          </ul>
                        )
                      }
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

import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import Paginator from "../../components/Paginator"
import Helmet from "react-helmet"
import { joinUri } from "phenomic"
import BaseLayout from "../BaseLayout"
import Videos from "../../components/Videos"

const limitPerPage = 20;

class Category extends React.PureComponent {
  static propTypes = {
    params: PropTypes.object.isRequired,
  }
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {
    let { location: { query: { page } } } = this.props;
    const { params: { slug } } = this.props
    page = !page ? 0 : page - 1;
    const category = enhanceCollection(this.context.collection, {
      filter: {
        type: "Category",
        slug: slug,
      },
    })[0]
    const metaTitle = `Hài ${category.title}`;
    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      {
        property: "og:url",
        content: joinUri(process.env.PHENOMIC_USER_URL, `/category/${category.slug}`),
      },
      { property: "og:description", content: "" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: metaTitle },
      { name: "twitter:description", content: "" },
      { name: "description", content: "" },
    ]
    const allVideos = enhanceCollection(this.context.collection, {
      filter: (post) => (
        post.type === "Post" &&
        post.hasOwnProperty("categories") &&
        post.categories.indexOf(slug) > -1
      ),
      sort: "date",
      reverse: true,
    })
    console.log(allVideos)
    const total = allVideos.length
    const index = limitPerPage * page
    const videos = allVideos.slice(index, index + limitPerPage)
    return (
      <div>
        <Helmet title={ metaTitle } meta={ meta }/>
        <div className="feature_box">
        </div>
        <div id="content_box">
          <Videos videos={ videos }/>
        </div>
      </div>
    )
  }
}

export default Category

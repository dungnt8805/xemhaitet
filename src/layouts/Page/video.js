import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"
import ReactPlayer from "react-player"
import FBComments from "../../components/Facebook/FBComments"
import FBLike from "../../components/Facebook/FBLike"
import enhanceCollection from "phenomic/lib/enhance-collection"
import Link from "phenomic/lib/Link"

const VideoPage = ({ url, head, body }, { collection }) => {
  let actors = []
  let categories = []
  if (head.actors) {
    actors = enhanceCollection(collection, {
      filter: (post) => (
        post.type === "Actor"
        && head.actors.indexOf(post.slug) > -1
      ),
      sort: "title",
    })
  }

  if (head.categories) {
    categories = enhanceCollection(collection, {
      filter: (post) => (
        post.type === "Category"
        && head.categories.indexOf(post.slug) > -1
      ),
      sort: "title",
    })
  }

  return (
    <article className="hentry">
      <div id="video-player" className="col-xs-12">
        <ReactPlayer url={ "https://www.youtube.com/watch?v=" + head.youtubeId } width="100%"/>
      </div>
      <div className="info col-xs-12">
        <h1 className="entry-title">
          { head.title }
            <span className="entry-date">
              <i className="fa fa-clock-o"></i>&nbsp;
              { new Date(head.date).toLocaleDateString("vi-vn", { year: "numeric", month: "numeric", day: "numeric" }) }
          </span>
        </h1>
        <div className="categories">
          { "Categories:" }
          {
            categories.map((cate) => (
              <span className="item" key={ cate.__url }>
                <Link to={ cate.__url } title={ cate.title }>{ cate.title }</Link>
              </span>
            ))
          }
        </div>
        <div className="actors">
          { "Nghệ sĩ:" }
        </div>
      </div>
      <FBLike link={ url }/>
      <div className="entry-content">
        <BodyContainer>{ body }</BodyContainer>
      </div>
      <div className="comment">
        <FBComments link={ url }/>
      </div>
    </article>
  )
}

VideoPage.propTypes = {
  url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
}

VideoPage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default VideoPage

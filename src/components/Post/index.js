import React, { PropTypes } from "react"
import Link from "phenomic/lib/Link"
import TagDisplay from "../TagDisplay"

const Post = ({ post }) => {
  return (
    <article className="hentry row post type-post entry clearfix col-xs-12" key={ post.__url }>
      <Link to={ post.__url } title={ post.title } className="post-thumbnail col-md-6">
        <img src={ post.__url + "/" + post.thumbnail }/>
      </Link>
      <h2 className="entry-title">
        <Link to={ post.__url }>{ post.title }</Link>
      </h2>
      <div className="entry-meta">
        <span className="entry-date">
          <i className="fa fa-clock-o"></i>&nbsp;{ new Date(post.date).toLocaleDateString() }
        </span>
      </div>
      <div className="entry-summary">
        { post.description }
      </div>
    </article>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post
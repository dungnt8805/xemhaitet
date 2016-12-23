import React, { PropTypes } from "react"
import Post from "../Post"

const PostList = ({ posts }) => {
  return (
    <div id="content_bg" className="singleCon">
      {
        posts.map((post) => (
          <Post post={ post } key={ post.__url } />
        ))
      }
    </div>
    // <div id="content_bg" className="singleCon">
    //   {
    //     posts.map((post) => (
    //       <Post post={ post } key={ post.__url } />
    //     ))
    //   }
    //   <div className="pagination"></div>
    // </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default PostList
import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import BaseLayout from "../BaseLayout"
import Link from "phenomic/lib/Link"
import Videos from "../../components/Videos"

const numberOfLatestPosts = 6

const Homepage = (props, { collection }) => {
  const videos = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  }).slice(0, numberOfLatestPosts)
  return (
    <BaseLayout { ...props }>
      <div className="feature_box">
      </div>
      <div id="content_box">
        <Videos videos={ videos } />
      </div>
    </BaseLayout>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage

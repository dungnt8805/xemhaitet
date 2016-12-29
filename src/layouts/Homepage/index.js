import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import BaseLayout from "../BaseLayout"
import Videos from "../../components/Videos"
import Helmet from "react-helmet"

const numberOfLatestPosts = 42

const Homepage = (props, { collection }) => {
  const videos = enhanceCollection(collection, {
    filter: { type: "Video" },
    sort: "date",
    reverse: true,
  }).slice(0, numberOfLatestPosts)
  const link = [
    { rel: "canonical", href: process.env.PHENOMIC_USER_URL },
  ]
  return (
    <BaseLayout { ...props }>
      <Helmet link={ link }/>
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

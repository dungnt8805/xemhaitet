import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import BaseLayout from "../BaseLayout"
import site from "../../config.yml"
import Vouchers from "../../components/Vouchers"

const Archive = (props, { collection }) => {
  const latestPosts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  })
  return (
    <BaseLayout { ...props }>
      <div className="feature_box">
      </div>
      <div id="content_box">
        <div id="content_widget">
        </div>
        <Vouchers vouchers={ latestPosts } archive/>
      </div>
    </BaseLayout>
  )
}

Archive.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Archive

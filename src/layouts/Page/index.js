import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"
import CategoryPage from "./category"
import VideoPage from "./video"
import enhanceCollection from "phenomic/lib/enhance-collection"
import { getQueryString } from "../../utils"
import Videos from "../../components/Videos"

const Page = ({
  __filename,
  __url,
  head,
  body,
  header,
  footer,
  children,
  },
  {
    metadata: { pkg }, collection,
    }) => {
  invariant(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )
  const url = joinUri(process.env.PHENOMIC_USER_URL, __url)
  const metaTitle = head.metaTitle ? head.metaTitle : head.title
  let metaImage = "";
  if (head.type === "Video") {
    metaImage = `https://img.youtube.com/vi/${head.youtubeId}/mqdefault.jpg`
  }
  const meta = [
    { property: "og:type", content: "video" },
    { property: "og:title", content: metaTitle },
    { property: "og:url", content: url },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "description", content: head.description },
    { property: "og:image", content: metaImage },
  ]
  let page = 1;
  if ("undefined" !== typeof window) {
    page = getQueryString(window.location.search).page
  }
  page = page > 0 ? page : 1;
  const limitPerPage = "Video" === head.type ? 15 : 30
  const startIndex = limitPerPage * (page - 1)
  const endIndex = startIndex + limitPerPage;
  let filter;
  if ("Video" === head.type) {
    filter = { type: "Video" }
  }

  if ("Category" === head.type) {
    filter = (post) => (
      post.type === "Video"
      && post.hasOwnProperty("categories")
      && post.categories.indexOf(head.slug) > -1
    )
  }

  if ("Actor" === head.type) {
    filter = (post) => (
      post.type === "Video"
      && post.hasOwnProperty("actors")
      && post.actors.indexOf(head.slug) > -1
    )
  }
  const allVideos = enhanceCollection(collection, {
    filter: filter, sort: "date", reverse: true,
  })

  const total = allVideos.length;
  const relatedVideos = allVideos.slice(startIndex, endIndex)
  const pages = total / limitPerPage
  return (
    <div>
      <Helmet title={ metaTitle } meta={ meta }/>
      {
        ("Video" === head.type && <VideoPage url={ url } head={ head } body={ body }/>)
        || ("Category" === head.type && <CategoryPage head={ head } body={ body }/>)
      }
      <Videos videos={ relatedVideos }/>

    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  __filename: PropTypes.string.isRequired,
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
  collection: PropTypes.array,
}

export default Page

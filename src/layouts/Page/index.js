import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"
import CategoryPage from "./category"
import VideoPage from "./video"
import enhanceCollection from "phenomic/lib/enhance-collection"
import { getQueryString, compareArrays } from "../../utils"
import Videos from "../../components/Videos"
import _ from "lodash"
import Paginator from "../../components/Paginator"

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
  const metaTitle = `${head.metaTitle ? head.metaTitle : head.title} :: ${pkg.name}`
  let metaImage = "";
  if (head.type === "Video") {
    metaImage = `https://img.youtube.com/vi/${head.youtubeId}/hqdefault.jpg`
  }
  if (head.type === "Category") {
    metaImage = head.thumbnail
  }
  const meta = [
    { property: "og:type", content: "video.movie" },
    { property: "og:title", content: metaTitle },
    { property: "og:url", content: url },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "description", content: head.description || head.title },
    { property: "og:image", content: metaImage },
  ]
  const link = [
    { rel: "canonical", href: url },
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
  const aVideos = enhanceCollection(collection, {
    filter: filter || { type: "Video" }, sort: "date", reverse: true,
  })

  let allVideos = []

  if ("Video" === head.type) {
    const series = enhanceCollection(collection, {
      filter: (post) => (
        post.type === "Video"
         && (head.hasOwnProperty("series") && head.series.length > 0 && post.hasOwnProperty("series")
         && head.series === post.series)
      ),
      sort: "title",
    })
    const sameCategoies = enhanceCollection(collection, {
      filter: (post) => (
        post.type === "Video"
        && (head.categories && post.hasOwnProperty("categories") && compareArrays(head.categories, post.categories) > 0)
      ),
    })
    const sameActors = enhanceCollection(collection, {
      filter: (post) => (
        post.type === "Video"
        && (head.actors && post.hasOwnProperty("actors") && compareArrays(head.actors, post.actors) > 0)
      ),
    })
    allVideos = _.unionBy(series, sameActors, sameActors, aVideos)
  }
  else {
    allVideos = aVideos;
  }
  const total = allVideos.length

  const relatedVideos = allVideos.slice(startIndex, endIndex)
  const pages = Math.ceil(total / limitPerPage)
  return (
    <div>
      <Helmet title={ metaTitle } meta={ meta } link={ link }/>
      {
        ("Video" === head.type && <VideoPage url={ url } head={ head } body={ body }/>)
        || ("Category" === head.type && <CategoryPage head={ head } body={ body }/>)
      }
      <Videos videos={ relatedVideos }/>
      {
        "Video" !== head.type && pages > 1 &&
          <Paginator current={ page } pages={ pages } uri={ __url }/>
      }
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

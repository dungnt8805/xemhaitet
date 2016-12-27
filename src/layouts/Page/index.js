import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"
import ReactPlayer from "react-player"
import FBComments from "../../components/Facebook/FBComments"
import FBLike from "../../components/Facebook/FBLike"

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

  const metaTitle = head.metaTitle ? head.metaTitle : head.title
  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "description", content: head.description },
  ]
  const url = joinUri(process.env.PHENOMIC_USER_URL, __url);
  return (
    <div>
      <article className="hentry" id={ __url }>
        <Helmet title={ metaTitle } meta={ meta }/>
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
        </div>
        <FBLike link={ url } />

        <div className="entry-content">
          <BodyContainer>{ body }</BodyContainer>
        </div>
        <div className="comment">
          <FBComments link={ url }/>
          <div id="disqus_thread"></div>
          <script>

          </script>
        </div>
      </article>
      <div className="comment-area" id="comments">
        <div id="disqus_thread"></div>
      </div>
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

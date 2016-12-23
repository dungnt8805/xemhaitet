import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"
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
    metadata: { pkg },
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

  return (
    <div>
      <article className="hentry" id={ __url }>
        <Helmet title={ metaTitle } meta={ meta } />
        <div id="video-player">
          
        </div>
        <h1 className="entry-title">
          { head.title }
        </h1>
        <div className="byline">
          <span className="entry-date">
            <i className="fa fa-clock-o"></i>&nbsp;
            { new Date(head.date).toLocaleDateString("vi-vn", { year: "numeric", month: "numeric", day: "numeric" }) }
          </span>
          <span className="entry-comment">
            <i className="fa fa-comment-o"></i>&nbsp;
          </span>
          <span className="entry-view">
            <i className="fa fa-eye"></i>&nbsp;
          </span>
        </div>
        <div className="share-container">
          <ul className="rrssb-buttons rrssb-1 clearfix">
            <li className="rrssb-facebook">
              <a href={ "https://www.facebook.com/sharer/sharer.php?u="+joinUri(process.env.PHENOMIC_USER_URL, __url) } className="popup">
                <span className="rrssb-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29">
                    <path d="M26.4 0H2.6C1.714 0 0 1.715 0 2.6v23.8c0 .884 1.715 2.6 2.6 2.6h12.393V17.988h-3.996v-3.98h3.997v-3.062c0-3.746 2.835-5.97 6.177-5.97 1.6 0 2.444.173 2.845.226v3.792H21.18c-1.817 0-2.156.9-2.156 2.168v2.847h5.045l-.66 3.978h-4.386V29H26.4c.884 0 2.6-1.716 2.6-2.6V2.6c0-.885-1.716-2.6-2.6-2.6z"></path>
                  </svg>
                </span>
                <span className="rrssb-text">{ "facebook" }</span>
              </a>
            </li>
            <li className="rrssb-googleplus">
              <a href={ "https://plus.google.com/share?url=" +joinUri(process.env.PHENOMIC_USER_URL, __url) } className="popup">
                <span className="rrssb-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M21 8.29h-1.95v2.6h-2.6v1.82h2.6v2.6H21v-2.6h2.6v-1.885H21V8.29zM7.614 10.306v2.925h3.9c-.26 1.69-1.755 2.925-3.9 2.925-2.34 0-4.29-2.016-4.29-4.354s1.885-4.353 4.29-4.353c1.104 0 2.014.326 2.794 1.105l2.08-2.08c-1.3-1.17-2.924-1.883-4.874-1.883C3.65 4.586.4 7.835.4 11.8s3.25 7.212 7.214 7.212c4.224 0 6.953-2.988 6.953-7.082 0-.52-.065-1.104-.13-1.624H7.614z">
                    </path>
                  </svg>
                </span>
                <span className="rrssb-text">{ "google+" }</span>
              </a>
            </li>
            <li className="rrssb-email">
              <a href={ "mailto:?Subject=" + metaTitle + "&body=" +joinUri(process.env.PHENOMIC_USER_URL, __url) } className="popup">
                <span className="rrssb-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M21.386 2.614H2.614A2.345 2.345 0 0 0 .279 4.961l-.01 14.078a2.353 2.353 0 0 0 2.346 2.347h18.771a2.354 2.354 0 0 0 2.347-2.347V4.961a2.356 2.356 0 0 0-2.347-2.347zm0 4.694L12 13.174 2.614 7.308V4.961L12 10.827l9.386-5.866v2.347z">
                    </path>
                  </svg>
                </span>
                <span className="rrssb-text">{ "email" }</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="entry-content">
          <BodyContainer>{ body }</BodyContainer>
        </div>
        <div className="comment">
          <div id="disqus_thread"></div>
          <script>

          </script>
        </div>
      </article>
      <div className="comment-area" id="comments">
        <div id="disqus_thread"></div>
        <Helmet script={ [ { src: "//xemhaitet.disqus.com/embed.js", "data-timestamp": +new Date() } ] } />
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
}

export default Page

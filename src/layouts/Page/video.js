import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"
import ReactPlayer from "react-player"
import FBComments from "../../components/Facebook/FBComments"
import FBLike from "../../components/Facebook/FBLike"

const VideoPage = ({ url, head, body }) => {
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

export default VideoPage

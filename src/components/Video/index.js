import React, { PropTypes } from "react"
import Link from "phenomic/lib/Link"

const Video = ({ video }) => {
  return (
    <article key={ video.__url } className="block video col-md-4 hentry type-post entry clearfix">
      <Link to={ video.__url } title={ video.title } className="entry-thumbnail">
        <img src={ "https://img.youtube.com/vi/" + video.youtubeId + "/mqdefault.jpg" } alt={ video.title }/>
      </Link>
      <h2 className="entry-title">
        <Link to={ video.__url } title={ video.title }>
          { video.title }
        </Link>
      </h2>
      <div className="entry-meta">
        <span className="entry-date">
          <i className="fa fa-clock-o"></i>&nbsp;{ new Date(video.date).toLocaleDateString() }
        </span>
      </div>
    </article>
  )
}

Video.propTypes = {
  video: PropTypes.object.isRequired,
}

export default Video

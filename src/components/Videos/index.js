import React, { PropTypes } from "react"
import Link from "phenomic/lib/Link"
import Video from "../../components/Video"

const Videos = ({ videos }) => {
  return (
    <div id="videos" className="col-xs-12 posts">
      <div className="grid">
        {
          videos.map((video) => (
            <Video video={ video } key={ video.__url }/>
          ))
        }
      </div>
    </div>
  )
}

Videos.propTypes = {
  videos: PropTypes.array.isRequired,
}

export default Videos

import React, { PropTypes } from "react"

class Player extends React.PureComponent {

  componentDidUpdate() {
    // const playerInstance = jwplayer("player_container")
    // playerInstance.setup({
    //   file: "//www.youtube.com/watch?v=8CjdLYBDUqw",
    // })
  }

  render() {
    return (
      <div id="player_container">
      </div>
    )
  }
}

export default Player
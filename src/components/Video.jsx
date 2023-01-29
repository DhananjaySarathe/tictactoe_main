import React from "react";

function Video(){
    return <div class="alert alert-secondary bg-success video" role="alert">
    <video height="300px" controls muted autoplay><source src="video/TicTacToe.mp4" alt="video"  type="video/mp4" /></video>
  </div>
}

export default Video;
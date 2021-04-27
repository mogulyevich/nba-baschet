import React from "react"

const Video = ({ videoURL, videoTitle, ...props }) => (
    <div className="video">
        <iframe
            width="300"
            height="200"
            src={videoURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope, picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            controls="0"
        />
    </div>
)

export default Video
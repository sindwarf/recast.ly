var VideoListEntry = ({video, currentVideo}) => {//video = props.video, currentVideo = props.currentVideo
  //console.log('props from VideoListEntry is', video);
  //console.log('video title: ', video.snippet.title);
  console.log("video list entry : ", currentVideo);
  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={currentVideo}>{video.snippet.title} </div>
        {/* <div className="video-list-entry-title" >{video.snippet.title} </div> */}
        <div className="video-list-entry-detail">{video.snippet.description}</div>
      </div>
    </div>
  );
};

/*
video.snippet.thumbnails.default
video.snippet.title
video.snippet.description
*/

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;

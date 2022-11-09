import VideoListEntry from './VideoListEntry.js';



var VideoList = ({videos, setNewVideo}) => {
  //console.log("video list: props.currentVideo ", props.currentVideo);
  //console.log("props.videoClicked", props.videoClicked);
  //console.log("current state", props.currentVideo);
  // console.log('props from video list', props.videos);
  return (
    <div className="video-list">
      {videos.map(video => (
        <VideoListEntry video={video} setNewVideo={videos}/>
      ))}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are vi olated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
// /src/data/exampleVideoData.js

const {useState} = React;//AKA const useState = React.useState;

var App = () => {
  const [videos, setVideos] = React.useState(exampleVideoData);
  const [currentVideo, setNewVideo] = useState(exampleVideoData[0]);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={videos} setNewVideo={(v) => setNewVideo(v)}/>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;



import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
// /src/data/exampleVideoData.js
var App = () => {
  //exampleVideoData is an array of objects
  //pass to VideoList as a prop
  //console.log(exampleVideoData);
  const videoData = exampleVideoData;//array of objects

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div Search ><h5><em>Search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em> view goes here</h5></div>
        </div>
        <div className="col-md-5">
          <div VideoList VideoList={VideoList}><h5><em>videoList</em> view goes here</h5></div>
        </div>
      </div>
    </div>
  );
};

var ExportVideoData = () => {
  return (
    <VideoData videoData= {[...rest]}
    />
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;



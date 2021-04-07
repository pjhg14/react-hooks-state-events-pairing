import video from "../data/video.js";
import Details from "./Details";
import Video from "./Video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video}/>
      <Details video={video}/>
    </div>
  );
}

export default App;

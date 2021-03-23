import {useState} from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from '../presentational/VideoList';
import VideoDetail from '../presentational/VideoDetail';
import Heading from '../presentational/Heading';

const Main = () => {
  // STATE INSTANTIATION
  const [searchTerm, setSearchTerm] = useState("");
  const [videoResults, setVideoResults] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  //HELPER FUNCTIONS
  const onSearchSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: searchTerm,
        type: 'video',
        key: '',
        part: 'snippet',
      }
    });
    setVideoResults(response.data.items)
  };

  const onVideoSelect = (videoElement) => {
    setSelectedVideo(videoElement.id.videoId);
  }

  return (
    <div>
      <div>
        <Heading />
      </div>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearchSubmit={onSearchSubmit}
      />
    
      <VideoDetail
        selectedVideo={selectedVideo}
      />

      <VideoList
        onVideoSelect={onVideoSelect}
        videoResults={videoResults}
      />
    </div>
  );
};

export default Main;
import {useState} from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from '../presentational/VideoList';
import VideoDetail from '../presentational/VideoDetail';

const Main = () => {
  // STATE INSTANTIATION
  const [searchTerm, setSearchTerm] = useState("");
  const [videoResults, setVideoResults] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onSearchSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: searchTerm,
        type: 'video',
        key: 'AIzaSyBQazd5isdSH0EbXYxkb0slk4GqeshUQgo',
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
      <SearchBar
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      onSearchSubmit={onSearchSubmit}
    />
    
    <VideoDetail
      selectedVideo={selectedVideo}
    />

    <VideoList
      videoResults={videoResults}
      onVideoSelect={onVideoSelect}
    />
    </div>
  );
};

export default Main;
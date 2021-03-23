import VideoItem from './VideoItem';

const VideoList = ({videoResults, onVideoSelect}) => {
  const renderedVideos = videoResults.map((videoElement) => {
    const videoTitle = videoElement.snippet.title
    return (
      <div className="border-2 border-gray">
        <VideoItem
        key={videoElement.id.VideoId}
        videoElement={videoElement}
        onVideoSelect={onVideoSelect}
        videoTitle={videoTitle}
        />
      </div> 
    )
  })
  return (
    <div>
      {renderedVideos}
    </div>
  )
};

export default VideoList;
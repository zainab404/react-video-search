import VideoItem from './VideoItem';

const VideoList = ({videoResults, onVideoSelect}) => {
  const renderedVideos = videoResults.map((videoElement) => {
    return (
      <VideoItem
        key={videoElement.id.VideoId}
        videoElement={videoElement}
        onVideoSelect={onVideoSelect}
      />
    )
  })
  return (
    <div>
      {renderedVideos}
    </div>
  )
};

export default VideoList;
const VideoItem = ({videoElement, onVideoSelect}) => {
  return (
    <div onClick={onVideoSelect} className="m-16" id="video-element">
      <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className="px-4 py-5 sm:px-6">
        {videoElement.snippet.title}
        <div className="px-4 py-5 sm:p-6">
          <img src={videoElement.snippet.thumbnails.default.url}></img>
        </div>
      </div>
    </div>
  </div>  
  )
}
export default VideoItem;
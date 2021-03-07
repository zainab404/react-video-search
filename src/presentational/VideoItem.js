const VideoItem = ({videoElement, onVideoSelect}) => {
  return (
    <div 
      onClick={() => onVideoSelect(videoElement)}
      className="m-16 flex justify-end" id="video-element"
    >
      <div className="cursor-pointer bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
        <div className="px-4 py-5 sm:px-6">
          {videoElement.snippet.title}
            <div className="px-4 py-5 sm:p-6">
              <img src={videoElement.snippet.thumbnails.default.url} alt={videoElement.snippet.title}></img>
          </div>
        </div>
      </div>
  </div>  
  )
}
export default VideoItem;
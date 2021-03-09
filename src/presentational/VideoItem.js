const VideoItem = ({videoElement, onVideoSelect}) => {
  return (
    <div id="row" className="w-48">
      <ul className=" m-8 divide-y divide-gray-200">
        <li onClick={() => onVideoSelect(videoElement)} className="py-6 cursor-pointer">
            <img src={videoElement.snippet.thumbnails.default.url} alt={videoElement.snippet.title}></img>
              <div className="ml-3">
                <p className=" w-48 text-sm font-medium text-gray-900">{videoElement.snippet.title}</p>
            </div>
          </li>
      </ul>
    </div>
  )
}
export default VideoItem;
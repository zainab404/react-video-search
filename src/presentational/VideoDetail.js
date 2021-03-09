const VideoDetail = ({selectedVideo}) => {

  if(!selectedVideo) {
    return null
  }
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo}`

  return (
    <div id="video-detail" className="flex justify-center">
      <iframe className="object-cover h-52 w-500" title="video display" src={videoSrc}/>
    </div>
    
  )
}

export default VideoDetail;
const VideoDetail = ({selectedVideo}) => {

  if(!selectedVideo) {
    return <h1>Search to display Video</h1>
  }
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo}`

  return (
    <iframe title="video display" src={videoSrc}/>
  ) 
}

export default VideoDetail;
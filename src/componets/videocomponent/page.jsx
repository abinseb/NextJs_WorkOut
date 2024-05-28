"use client"
import styles from './video.module.css';
const VideoComponet = () => {
  return (
    <div className={styles.videocontainer}>
      {/* <video width="400px" height="300px" autoPlay muted loop >
            <source src={video} type='mp4/video' />
            <track
                src={video}
                kind="subtitles"
                srcLang="en"
                label="English"
            />
            Your browser does not support the video tag.
      </video> */}
      <h1>Video</h1>
    </div>
  )
}

export default VideoComponet;

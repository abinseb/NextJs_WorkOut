import React from 'react'
import styles from './contact.module.css';
const ContactPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.videoContainer}>
  
        <video width="320" height="240" controls preload="none">
      <source src="/path/to/video.mp4" type="video/mp4" />

          {/* <track
            src='../../../public/nature_wterfall.mp4'
            kind="subtitles"
            srcLang="en"
            label="English"
          /> */}
          Your browser does not support the video tag.
        </video>
        </div>
    </div>
  )
}

export default ContactPage

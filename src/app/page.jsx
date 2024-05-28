import React, { Suspense } from 'react'
import styles from './home.module.css'
import Image from 'next/image'
import VideoComponet from '@/componets/videocomponent/page'
const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.videoComponent}>
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoComponet/>
          </Suspense>
            
        </div>
        <div className={styles.description}>
            <h2>Description</h2>
        </div>
    </div>
  )
}

export default Home

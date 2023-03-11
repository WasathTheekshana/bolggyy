import React from 'react'
import Link from 'next/link'
import styles from '@/styles/BlogCard.module.css'

function BlogCard({props}) {
  return (
    <div>
      <div className={styles.card}>
        <Link href={"/posts/" + props.slug }>
          <div className={styles.imgContainer}>
              <img loading='lazy' src={props.coverPhoto.url} alt={props.title} />
              <h1></h1>
          </div>
        </Link>
        <div className={styles.text}>
          <h2>{props.title}</h2>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
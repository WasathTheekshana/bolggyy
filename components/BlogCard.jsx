import React from 'react'
import Link from 'next/link'
import styles from '@/styles/BlogCard.module.css'

function BlogCard({ props }) {
  return (
    <div>
      <div className={styles.card}>
        <Link href={"/posts/" + props.slug}>
          <div className={styles.imgContainer}>
            <img loading='lazy' src={props.coverPhoto.url} alt={props.title} />
            <h1></h1>
          </div>
        </Link>
        <div className={styles.text}>
          <h2>{props.title}</h2>
          <div className={styles.details}>
            <div className={styles.author}>
              <img src={props.author.avatar.url} alt="" />
              <h3>{props.author.name}</h3>
            </div>
            <div className={styles.date}>
              <h3>{props.datePublished}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
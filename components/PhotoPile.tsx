import Image from 'next/image'
import styles from '../styles/Pages.module.css'

export type PhotoItem = {
  src: string
  alt: string
}

type PhotoPileProps = {
  photos: PhotoItem[]
}

export default function PhotoPile({ photos }: PhotoPileProps) {
  return (
    <div className={styles.photoPile}>
      {photos.map((photo, index) => (
        <div key={index} className={styles.photoCard}>
          <Image 
            src={photo.src} 
            alt={photo.alt}
            width={400}
            height={300}
            className={styles.photoImage}
          />
        </div>
      ))}
    </div>
  )
}

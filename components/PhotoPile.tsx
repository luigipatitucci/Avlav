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
          <img 
            src={photo.src} 
            alt={photo.alt} 
            className={styles.photoImage}
          />
        </div>
      ))}
    </div>
  )
}

import React from 'react'
import styles from '../styles/DiagonalDivider.module.css'

const DiagonalDivider: React.FC = () => {
  return (
    <section className={styles.divider} aria-hidden="true">
      <div className={styles.diagonalLine} />
    </section>
  )
}

export default DiagonalDivider

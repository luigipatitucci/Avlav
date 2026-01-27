import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}

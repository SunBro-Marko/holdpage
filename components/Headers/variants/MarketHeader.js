import React from 'react'
import styles from '@styles/market.module.scss'

function MarketHeader() {
  return (
    <header className={styles.header}>
      <img className={styles.header_logo} src="/carcoinLogo.png" />
    </header>
  )
}

export default MarketHeader

import { useState } from 'react'
import styles from '@styles/market.module.scss'

function MarketMain() {
  const [Time] = useState(process.env.NEXT_PUBLIC_ARISING_TIME)
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.card_title}>Ведутся технические работы</div>
        <div className={styles.card_text}>
          Наш сервис находится на техническом обслуживании и скоро станет
          доступен
        </div>
        <div className={styles.card_text}>
          Планируемое время окончания работ: {Time}
        </div>
      </div>
      <img
        className={styles.decoration_top}
        src={'/marketBackgroundLogo.png'}
      />
      <img
        className={styles.decoration_bottom}
        src={'/marketBackgroundLogo.png'}
      />
    </main>
  )
}

export default MarketMain

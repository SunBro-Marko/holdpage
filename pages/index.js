import { useState } from 'react'
import Head from 'next/head'
import styles from '@styles/Home.module.css'

//СуперКонпонент
import AbstractComponent from '@components/AbstactComponent'

//Варианты
import * as headers from '@components/Headers'
import * as footers from '@components/Footers'
import * as mains from '@components/Mains'

export default function Home() {
  const [pageType] = useState(process.env.NEXT_PUBLIC_PAGE_TYPE)

  return (
    <div className={styles.container}>
      <Head>
        <title>Carcoin - Технические работы</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {process.env.PAGE_TYPE}
      <AbstractComponent type={pageType} variants={headers} />
      <AbstractComponent type={pageType} variants={mains} />
      <AbstractComponent type={pageType} variants={footers} />
    </div>
  )
}

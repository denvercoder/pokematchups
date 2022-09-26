import {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [clicked, setClicked] = useState(true);
  const [image, setImage] = useState("/chart.png")

  return (
    <div className={styles.container}>
      <Head>
        <title>Poke Matchups</title>
        <meta name="description" content="Pokemon GO Matchups" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <button style={{padding: 12, margin: 12}} type="button" onClick={() => setImage('/glchart.png')}>Great League</button>
          <button style={{padding: 12, margin: 12}} type="button" onClick={() => setImage('/ulchart.png')}>Ultra League</button>
          <button style={{padding: 12, margin: 12}} type="button" onClick={() => setImage('/mlchart.png')}>Master League</button>
          <button style={{padding: 12, margin: 12}} type="button" onClick={() => setImage('/chart.png')}>Types</button>
        </div>
        
          <section>
          <Image src={image} alt="graph of strengths and weaknesses for my team" width="800" height="600" />
        </section>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/denvercoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            Powered by DenverCoder
          </span>
        </a>
      </footer>
    </div>
  )
}

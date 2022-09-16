import {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  

  const [clicked, setClicked] = useState(true);

  function handleClick() {
    setClicked(!clicked)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Poke Matchups</title>
        <meta name="description" content="Pokemon GO Matchups" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Click to swap between charts</h1>
        {clicked ? (
          <section>
          <Image src="/matchups.png" alt="graph of strengths and weaknesses for my team" width="800" height="600" onClick={handleClick} />
        </section>) : (
          <section>
          <Image src="/ulchart.png" alt="graph of strengths and weaknesses for my team" width="800" height="600" onClick={handleClick} />
        </section>)
}
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Poke Matchups</title>
        <meta name="description" content="Pokemon GO Matchups" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <Image src="/matchups.png" alt="graph of strengths and weaknesses for my team" width="800" height="600" />
        </section>
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

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import FighterJetCanvas from '../components/FighterJetCanvas';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Professional Portfolio</title>
        <meta name="description" content="Professional portfolio with a fighter jet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.description}>Explore my work and achievements.</p>

        <div className={styles.canvasContainer}>
          <FighterJetCanvas />
        </div>

        <section className={styles.sections}>
          <div>
            <h2>About Me</h2>
            <p>I am a professional with expertise in [your expertise].</p>
          </div>
          <div>
            <h2>Projects</h2>
            <p>Check out my projects below!</p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
          </div>
        </section>
      </main>
    </div>
  );
}
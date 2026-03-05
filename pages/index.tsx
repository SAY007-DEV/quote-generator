import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const handleGenerate = () => {
    const randomId = Math.random().toString(36).substring(7);
    router.push(`/${randomId}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>QuoteGen — AI Powered Social Media Quote Generator</title>
        <meta name="description" content="Generate stunning, high-quality quote images for your social media in seconds. Powered by AI and headless browser technology." />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.badge}>✨ Now with AI-Powered Templates</div>
          <h1 className={styles.title}>
            Transform your words into <br />
            <span>Visual Stories</span>
          </h1>
          <p className={styles.description}>
            Create professional-grade quote images instantly. Perfect for Instagram,
            Twitter, and LinkedIn. No design skills required.
          </p>

          <div className={styles.cta_group}>
            <button onClick={handleGenerate} className={styles.btn_primary}>
              Generate Magic Quote
            </button>
            <button className={styles.btn_secondary}>
              View Gallery
            </button>
          </div>
        </div>

        <div className={styles.preview_card}>
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"
            alt="Quote Preview Background"
            className={styles.preview_image}
          />
          <div className={styles.preview_overlay}>
            <div className={styles.preview_text}>
              "The future belongs to those who believe in the beauty of their dreams."
            </div>
            <div style={{ opacity: 0.8 }}>— Eleanor Roosevelt</div>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.feature_card}>
            <div className={styles.feature_icon}>⚡</div>
            <h3 className={styles.feature_title}>Insanely Fast</h3>
            <p className={styles.feature_desc}>
              Generate high-resolution PNG images in under 2 seconds using our optimized cloud infrastructure.
            </p>
          </div>

          <div className={styles.feature_card}>
            <div className={styles.feature_icon}>🎨</div>
            <h3 className={styles.feature_title}>Pure Aesthetics</h3>
            <p className={styles.feature_desc}>
              Carefully curated color palettes and typography designed to stand out on any social feed.
            </p>
          </div>

          <div className={styles.feature_card}>
            <div className={styles.feature_icon}>🌐</div>
            <h3 className={styles.feature_title}>API Ready</h3>
            <p className={styles.feature_desc}>
              Simple URL-based generation. Perfect for integration into your own apps or workflows.
            </p>
          </div>
        </div>
      </main>

      <footer style={{ padding: '4rem 0', textAlign: 'center', opacity: 0.5, borderTop: '1px solid var(--glass-border)' }}>
        © 2024 QuoteGen AI. All rights reserved.
      </footer>
    </div>
  );
}


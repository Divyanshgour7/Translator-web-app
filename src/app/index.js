"use client"

import React from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import styles from './Home.module.css'; // Import the styles

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>{t('language')}</h1>
        </header>
        <p className={styles.content}>{t('Blog')}</p>
        <button className={`${styles.button} ${styles.likeButton}`}>{t('Like')} 👍</button>
        
        <button className={`${styles.button} ${styles.dislikeButton}`}>{t('DisLike')}👎</button>
      </main>
      <Footer/>
    </div>
  );
}

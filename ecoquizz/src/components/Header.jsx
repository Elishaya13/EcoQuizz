// src/components/Header.jsx
import React from 'react';
import styles from './Header.module.css'; // Assurez-vous que le fichier CSS est correctement importé

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src="/logo-ecologie.svg" alt="Logo Quiz Écologie" className={styles.logo} />
        <h1 className={styles.title}>Quiz Écologie</h1>
      </div>
    </header>
  );
}

export default Header;

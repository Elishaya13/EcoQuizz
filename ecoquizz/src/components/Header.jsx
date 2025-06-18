// src/components/Header.jsx
import React from 'react';
import styles from './Header.module.css'; 
function Header() {
return (
    <header className={styles.header}>
        <div className={styles.headerContent}>
            <img src="/icons/logo-ecologie.jpg" alt="Logo Quiz Écologie" className={styles.logo} />
            <h1 className={styles.title}>Quiz Écologie</h1>
        </div>
    </header>
);
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { ReactComponent as Logo } from './logo2.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="https://radulefter.co.uk/" className={styles.link1}>Radu Lefter</Link>
      <Link to="/"><Logo /></Link>
      <Link to="/" className={styles.link2}>Terms and Privacy</Link>
    </footer>
  );
}

export default Footer;

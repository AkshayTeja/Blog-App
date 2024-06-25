import React from 'react';
import styles from "./navbar.module.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <FaFacebook/>
        <FaInstagram/>
        <FaYoutube/>
      </div>
      <div className={styles.logo}>SparkBlogs</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link className={styles.links} href="/">Homepage</Link>
        <Link className={styles.links} href="/">Contact</Link>
        <Link className={styles.links} href="/">About</Link>
        <AuthLinks/>
      </div>
    </div>
  );
};

export default Navbar;

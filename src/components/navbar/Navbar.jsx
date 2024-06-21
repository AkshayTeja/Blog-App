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
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks/>
      </div>
    </div>
  );
};

export default Navbar;

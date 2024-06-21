"use client"

import { FaSun } from "react-icons/fa";
import styles from "./themeToggle.module.css";
import { IoMoon } from "react-icons/io5";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {

  const {toggle,theme} = useContext(ThemeContext)
  
  console.log(theme);

  return (
    <div className={styles.container} onClick={toggle}>
      <IoMoon color="#ffffff" size="15px"/>
      <div className={styles.ball} style={
        theme === "dark" ? {left:1,backgroundColor:"#0f172a"}
      : {right:1,backgroundColor: "white"}
      }>
      </div>
      <FaSun color="#ffffff" size="15px"/>
    </div>
  )
}

export default ThemeToggle;

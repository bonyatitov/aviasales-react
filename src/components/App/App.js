import React from "react";
import styles from './App.module.css';
import Header from "../Header";

const App = () => {
  return (
   <div className={styles["app-container"]}>
      <Header />
      <div className={styles["main-container"]}>
        <div className={styles["left-container"]}>
          <div style={{height:'252px', width: '232px', backgroundColor: '#778da9'}}></div>
        </div>
        <div className={styles["right-container"]}>
          <div className={styles["top-container"]}>
            <div style={{width: "502px", height: "50px", backgroundColor: "#778da9"}}></div>
          </div>
          <div className={styles["bottom-container"]}>
            <div style={{width: "502px", height:"400px", backgroundColor: "#778da9"}}></div>
          </div>
        </div>
      </div>
   </div>
  );
};

export default App;
import React from "react";
import styles from "./NotFoundBlock.module.scss";

export default function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <span className={styles.smiles}> {" ( ´•︵•` )"}</span>
      <br />
      <h1 className={styles.info}>Ничего не найдено</h1>
      <p className={styles.description}> К сожалению такой страницы не найдено в нашем магазине</p>
    </div>
  );
}

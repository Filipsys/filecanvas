import { db } from "../database/db";
import { elements } from "../database/schema";
import Image from "next/image";

import article from "../../public/navicons/article.svg";
import edit from "../../public/navicons/edit.svg";
import image from "../../public/navicons/image.svg";
import link from "../../public/navicons/link.svg";
import pan from "../../public/navicons/pan.svg";
import resize from "../../public/navicons/resize.svg";

import styles from "../../styles/Page.module.css";

import handleClick from "./components/handleClick";

import React from "react";


export default async function Home() {
  const elementsJSON = await db.select().from(elements);

  const containers = elementsJSON.map((element) => (
    <div className="" style={{ width: element.width || "fit-content", height: element.height, top: element.y, left: element.x, backgroundColor: "#0e4145", position: "absolute", border: "3px solid #12585d", borderRadius: "10px", padding: "10px" }} key={element.id}>
      <div style={{ fontSize: "20px", color: "white", verticalAlign: "top", textAlign: "left", userSelect: "none" }}>
        {element.data ? element.data : element.dataLink}
      </div>
    </div>
  ));

  return (
    <main className={styles.pageeee}>
      <nav className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <div className={styles.navbarCenter}>
            <div className={styles.navbarLeft}>
              <div className={styles.navbarItem}>
                <Image alt="pan" src={pan} className={styles.itemImage} />
              </div>
              <div className={styles.navbarItem}>
                <Image alt="resize" src={resize} className={styles.itemImage} />
              </div>
              <div className={styles.navbarItem}>
                <Image alt="edit" src={edit} className={styles.itemImage} />
              </div>
            </div>

            <div className={styles.navbarRight}>
              <div className={styles.navbarSpacer}><p>+</p></div>

              <button className={styles.navbarItem} onClick={handleClick}>
                <Image alt="image" src={image} className={styles.itemImage} />
              </button>
              <button className={styles.navbarItem}>
                <Image alt="link" src={link} style={{ transform: "rotate(-45deg)" }} className={styles.itemImage} />
              </button>
              <button className={styles.navbarItem}>
                <Image alt="article" src={article} className={styles.itemImage} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {containers}

      <div style={{ width: "150vw", height: "150vh", backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.02) 10%, transparent 10%)", backgroundSize: "30px 30px", overflow: "hidden" }} />
    </main>
  );
}

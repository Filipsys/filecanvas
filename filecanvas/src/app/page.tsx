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


export default async function Home() {
  const elementsJSON = await db.select().from(elements);

  const containers = elementsJSON.map((element) => (
    <div className="" style={{ width: element.width, height: element.height, top: element.y, left: element.x, backgroundColor: "#0e4145", position: "absolute", border: "3px solid #12585d", borderRadius: "10px", padding: "10px" }} key={element.id}>
      <div style={{ fontSize: "20px", color: "white", verticalAlign: "top", textAlign: "left", userSelect: "none" }}>
        {element.data}
      </div>
    </div>
  ));

  return (
    <main className={styles.page}>
      <nav className={styles.navbarContainer}>
        <div className="navbar">
          <div className="navbar-center">
            <div className="navbar-item">
              <Image alt="pan" src={pan} width={20} height={20} className="item-image" />
            </div>
            <div className="navbar-item">
              <Image alt="resize" src={resize} width={20} height={20} style={{ borderRadius: 7, opacity: .7, padding: "5px", backgroundColor: "#31303b" }} />
            </div>
            <div className="navbar-item">
              <Image alt="edit" src={edit} width={20} height={20} className="item-image" />
            </div>
            <div className="navbar-item">
              <Image alt="image" src={image} width={20} height={20} className="item-image" />
            </div>
            <div className="navbar-item">
              <Image alt="link" src={link} width={20} height={20} className="item-image" />
            </div>
            <div className="navbar-item">
              <Image alt="article" src={article} width={20} height={20} className="item-image" />
            </div>
          </div>
        </div>
      </nav>
      
      {containers}

      {/* <div style={{ width: "150vw", height: "150vh", backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.02) 10%, transparent 10%)", backgroundSize: "30px 30px" }} /> */}
    </main>
  );
}

import { db } from "../database/db";
import { elements } from "../database/schema";
import Image from "next/image";

import styles from "../../styles/Page.module.css";

// import Counter from "./components/counter";
// import logClick from "./functions/serverLog";
// import LogButton from "./components/LogButton";
// import addElement from "./functions/addElement";
import ButtonTypeInsert from "./components/ButtonTypeInsert";
import ButtonTypeEdit from "./components/ButtonTypeEdit";
import ClientMessageHandler from "./components/ClientMessageHandler";
import ActionHandler from "./components/ActionHandler";

export default async function Home() {
  const elementsJSON = await db.select().from(elements);

  const handleAction = async (action: string) => {
    "use server";

    console.log("Action received:", ActionHandler({ newAction: action }));
  };

  const containers = elementsJSON.map((element) => (
    <div
      className=""
      style={{
        width: element.width || "fit-content",
        height: element.height,
        top: element.y,
        left: element.x,
        backgroundColor: "#0e4145",
        position: "absolute",
        border: "3px solid #12585d",
        borderRadius: "10px",
        padding: "10px",
      }}
      key={element.id}
    >
      <div
        style={{
          fontSize: "20px",
          color: "white",
          verticalAlign: "top",
          textAlign: "left",
          userSelect: "none",
        }}
      >
        {element.data ? element.data : element.dataLink}
      </div>
    </div>
  ));

  // const handleClick = async () => {
  //   'use client';

  //   await logClick();
  // };

  return (
    <main className={styles.page}>
      <ClientMessageHandler onAction={handleAction}>
        <nav className={styles.navbarContainer}>
          <div className={styles.navbar}>
            <div className={styles.navbarCenter}>
              <div className={styles.navbarLeft}>
                <div className={styles.ItemCenter}>
                  <ButtonTypeEdit buttonType="pan" />
                  <ButtonTypeEdit buttonType="resize" />
                  <ButtonTypeEdit buttonType="edit" />
                </div>
              </div>

              <div className={styles.navbarRight}>
                <div className={styles.navbarSpacer}>
                  <p>+</p>
                </div>

                <ButtonTypeInsert buttonType="link" />
                <ButtonTypeInsert buttonType="image" />
                <ButtonTypeInsert buttonType="text" />
              </div>
            </div>
          </div>
        </nav>

        {containers}

        {/* <div style={{ width: "150vw", height: "150vh", backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.02) 10%, transparent 10%)", backgroundSize: "30px 30px", overflow: "hidden" }} /> */}

        {/* <Counter /> */}
        {/* <LogButton /> */}
      </ClientMessageHandler>
    </main>
  );
}

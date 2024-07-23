import { db } from "../database/db";
import { elements } from "../database/schema";

import { MyCanvasElement } from "./_components/CanvasWrapper";
import { EditButtons } from "./_components/EditButtons";
import { ButtonTypeInsert } from "./_components/ButtonTypeInsert";

import styles from "../../styles/Page.module.css";

export default async function Home() {
  const elementsJSON = await db.select().from(elements);

  return (
    <main className={styles.page}>
      <nav className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <div className={styles.navbarCenter}>
            <div className={styles.navbarLeft}>
              <div className={styles.ItemCenter}>
                <EditButtons />
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

      {/* {containers} */}

      {elementsJSON.map((element) => (
        <MyCanvasElement
          key={element.id}
          mode="move"
          x={element.x}
          y={element.y}
          width={element.width}
          height={element.height}
          data={element.data}
          dataLink={element.dataLink}
        />
      ))}

      {/* <div style={{ width: "150vw", height: "150vh", backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.02) 10%, transparent 10%)", backgroundSize: "30px 30px", overflow: "hidden" }} /> */}
    </main>
  );
}

import { elements } from "@/database/schema";
import { trpc } from "../utils/trpc";

import { MyCanvasElement } from "@/app/_components/CanvasWrapper";
import { EditButtons } from "@/app/_components/EditButtons";
import { ButtonTypeInsert } from "@/app/_components/ButtonTypeInsert";

import styles from "../../styles/Page.module.css";

export default async function Home() {
  // const elementsJSON = await db.select().from(elements);
  // const elementsJSON = trpc.elementList.useQuery();
  const result = trpc.sayHello.useQuery();

  return (
    <>
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

      {/* {elementsJSON.map((element) => (
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
      ))} */}

      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.02) 10%, transparent 10%)",
          backgroundSize: "30px 30px",
          overflow: "hidden",
        }}
      />
    </>
  );
}

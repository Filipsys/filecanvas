import { db } from "../database/db";
import { elements } from "../database/schema";
import Image from "next/image";

import article from "../../public/navicons/article.svg";
import edit from "../../public/navicons/edit.svg";
import image from "../../public/navicons/image.svg";
import link from "../../public/navicons/link.svg";
import pan from "../../public/navicons/pan.svg";
import resize from "../../public/navicons/resize.svg";


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
    <main style={{ width: "100%", height: "100dvh", backgroundColor: "#161718", position: "relative" }}>
      <nav style={{ width: "100%", height: "50px", position: "absolute", top: 0, left: 0, display: "flex", justifyContent: "center", marginTop: "15px", zIndex: 10 }}>
        <div style={{ width: "30%", display: "flex", position: "relative", borderRadius: "10px", boxShadow: "0px 0px 40px -15px rgb(0, 0, 0)", backgroundColor: "#0e4145" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
            <div style={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Image alt="pan" src={pan} width={30} height={30} />
            </div>
            <div style={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Image alt="resize" src={resize} width={30} height={30} />
            </div>
            <div style={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Image alt="edit" src={edit} width={30} height={30} />
            </div>
            <div style={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Image alt="image" src={image} width={30} height={30} />
            </div>
            <div style={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Image alt="link" src={link} width={30} height={30} />
            </div>
            <div style={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Image alt="article" src={article} width={30} height={30} />
            </div>
          </div>

          <div>

          </div>
        </div>
      </nav>
      
      {containers}
    </main>
  );
}

import { db } from "../database/db";
import { elements } from "../database/schema";

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

        </div>
      </nav>
      
      {containers}
    </main>
  );
}

import { db } from "@/database/db";
import { elements } from "@/database/schema";

const AddElement = async (element: any) => {
  await db.insert(elements).values({
    x: element.x,
    y: element.y,
    width: element.width,
    height: element.height,
    dataType: element.dataType,
    dataLink: element.dataLink,
    data: element.data,
    color: element.color,
  });
};

export default AddElement;

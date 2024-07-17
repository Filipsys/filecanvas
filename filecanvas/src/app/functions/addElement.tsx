"use server";

import { db } from "@/database/db";
import { elements } from "@/database/schema";
import { revalidatePath } from "next/cache";

const addElement = async (/* element: any */) => {
  // await db.insert(elements).values({
  //   x: element.x,
  //   y: element.y,
  //   width: element.width,
  //   height: element.height,
  //   dataType: element.dataType,
  //   dataLink: element.dataLink,
  //   data: element.data,
  //   color: element.color,
  // });

  console.log("element");

  revalidatePath("/");
};

export default addElement;

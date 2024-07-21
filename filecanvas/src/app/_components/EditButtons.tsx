"use client";

import ButtonTypeEdit from "./ButtonTypeEdit";
import panElement from "../actions/panElement";
import resizeElement from "../actions/resizeElement";
import editElement from "../actions/editElement";

import { useState } from "react";

export default function EditButtons() {
  const [activeOption, changeActiveOption] = useState<string>("edit");

  function setActiveOption(option: string) {
    changeActiveOption(option);

    switch (option) {
      case "pan":
        panElement(
          document.querySelector("[id^='element-']:hover") as HTMLElement,
        );
        break;
      case "resize":
        resizeElement(
          document.querySelector("[id^='element-']:hover") as HTMLElement,
        );
        break;
      case "edit":
        editElement(
          document.querySelector("[id^='element-']:hover") as HTMLElement,
        );
        break;
    }

    console.log(activeOption);
  }

  return (
    <>
      <ButtonTypeEdit buttonType="pan" onClick={() => setActiveOption("pan")} />
      <ButtonTypeEdit
        buttonType="resize"
        onClick={() => setActiveOption("resize")}
      />
      <ButtonTypeEdit
        buttonType="edit"
        onClick={() => setActiveOption("edit")}
      />
    </>
  );
}

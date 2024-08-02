"use client";

import { ButtonTypeEdit } from "./ButtonTypeEdit";

// import { useState } from "react";

export function EditButtons() {
  // const [mode, setMode] = useState("pan");
  // const [data, setData] = useState("pan");

  return (
    <>
      <ButtonTypeEdit
        buttonType="pan"
        // onClick={() => (setMode("pan"), setData(mode))}
      />
      <ButtonTypeEdit
        buttonType="resize"
        // onClick={() => (setMode("resize"), setData(mode))}
      />
      <ButtonTypeEdit
        buttonType="edit"
        // onClick={() => (setMode("edit"), setData(mode))}
      />
    </>
  );
}

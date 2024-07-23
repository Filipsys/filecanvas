"use client";

import ButtonTypeEdit from "./ButtonTypeEdit";

import { useState } from "react";

export function EditButtons() {
  const [mode, setMode] = useState("pan");

  return (
    <>
      <ButtonTypeEdit
        buttonType="pan"
        onClick={() => (setMode("pan"), console.log(mode))}
      />
      <ButtonTypeEdit
        buttonType="resize"
        onClick={() => (setMode("resize"), console.log(mode))}
      />
      <ButtonTypeEdit
        buttonType="edit"
        onClick={() => (setMode("edit"), console.log(mode))}
      />
    </>
  );
}

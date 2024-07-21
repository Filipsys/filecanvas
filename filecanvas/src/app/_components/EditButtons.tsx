"use client";

import ButtonTypeEdit from "./ButtonTypeEdit";

import { useState } from "react";

function setActiveOption(option: string) {}

export default function EditButtons() {
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | undefined>(
    undefined,
  );

  return (
    <>
      <ButtonTypeEdit buttonType="pan" onClick={() => setActiveOption("pan")} />
      <ButtonTypeEdit buttonType="resize" />
      <ButtonTypeEdit buttonType="edit" />
    </>
  );
}

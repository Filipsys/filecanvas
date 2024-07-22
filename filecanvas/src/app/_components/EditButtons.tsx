"use client";

import ButtonTypeEdit from "./ButtonTypeEdit";

import { useState } from "react";

export default function EditButtons() {
  const [hoveredElement, setHoveredElement] = useState<HTMLElement>();
  const [activeOption, changeActiveOption] = useState<string>("pan");

  function panMode() {
    changeActiveOption("pan");

    const onHover = (element: Element) => {
      console.log("Hovered", element);

      // const dragDiv = <div>Drag</div>;

      // element.appendChild(dragDiv);
    };

    const onRemoveHover = (element: Element) => {
      console.log("Remove hover", element);
    };

    document.querySelectorAll("[id^='element-']").forEach((element) => {
      const newElement = element as HTMLElement & {
        _hasHoverListeners?: boolean;
      };

      if (!newElement._hasHoverListeners) {
        element.addEventListener("mouseenter", () => onHover(element));
        element.addEventListener("mouseleave", () => onRemoveHover(element));

        newElement._hasHoverListeners = true;
      }
    });
  }

  return (
    <>
      <ButtonTypeEdit buttonType="pan" onClick={() => panMode()} />
      <ButtonTypeEdit
        buttonType="resize"
        onClick={() => console.log("Resize clicked")}
      />
      <ButtonTypeEdit
        buttonType="edit"
        onClick={() => console.log("Edit clicked")}
      />
    </>
  );
}

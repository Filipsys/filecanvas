"use client";

import Image from "next/image";
import addElement from "../functions/addElement";

import { useState, useRef } from "react";

import edit from "../../../public/navicons/edit.svg";
import pan from "../../../public/navicons/pan.svg";
import resize from "../../../public/navicons/resize.svg";

import styles from "../../../styles/Page.module.css";

// function PanDiv() {
//   return <div>Pan</div>;
// }

const ButtonTypeEdit = (props: { onClick: () => void; buttonType: string }) => {
  const states: { [key: string]: string } = {
    "edit-btn": "edit",
    "pan-btn": "pan",
    "resize-btn": "resize",
  };

  // const handleClick = async (
  //   event: React.MouseEvent<HTMLInputElement, MouseEvent>,
  // ) => {
  //   const selectedState = states[(event.target as HTMLInputElement).id];

  // for (const [key, value] of Object.entries(states)) {
  //   if (key !== selectedState) {
  //     console.log(key);
  //   }
  // }

  // handlePan(selectedState);
  // };

  // const handlePan = (selectedState: string) => {
  //   const elements = document.querySelectorAll("[id^='element-']");

  //   elements.forEach((element) => {
  //     if (selectedState === "pan") {
  //       element.addEventListener("mouseenter", hoverPan);
  //       element.addEventListener("mouseleave", removeHoverPan);
  //     } else if (selectedState === "resize") {
  //       // console.log("Resize");
  //     } else if (selectedState === "edit") {
  //       // console.log("Edit");
  //     }
  //   });
  // };

  // const hoverPan = () => {
  // setHoveredElement = document.querySelector(
  //   "[id^='element-']:hover",
  // ) as HTMLElement;
  //
  // setHoveredElement(
  //   document.querySelector("[id^='element-']:hover") as HTMLElement,
  // );
  // console.log(hoveredElement);
  // if (hoveredElement)
  //   (hoveredElement.lastChild as HTMLElement).style.display = "block";
  // };

  // const removeHoverPan = () => {
  //   console.log("Remove hover pan", hoveredElement);
  //   setHoveredElement(undefined);

  //   if (hoveredElement)
  //     (hoveredElement.lastChild as HTMLElement).style.display = "none";
  // };

  const typesDict = {
    edit: (
      <div className={styles.radioImageCenter}>
        <input
          type="radio"
          name="actions"
          id="edit-btn"
          className={styles.radioButton}
          onClick={props.onClick}
        />

        <Image alt="edit" src={edit} className={styles.itemImage} />
      </div>
    ),
    pan: (
      <div className={styles.radioImageCenter}>
        <input
          type="radio"
          name="actions"
          id="pan-btn"
          defaultChecked
          className={styles.radioButton}
          onClick={props.onClick}
        />

        <Image alt="pan" src={pan} className={styles.itemImage} />
      </div>
    ),
    resize: (
      <div className={styles.radioImageCenter}>
        <input
          type="radio"
          name="actions"
          id="resize-btn"
          className={styles.radioButton}
          onClick={props.onClick}
        />

        <Image alt="resize" src={resize} className={styles.itemImage} />
      </div>
    ),
  };

  switch (props.buttonType) {
    case "edit":
      return typesDict.edit;
    case "pan":
      return typesDict.pan;
    case "resize":
      return typesDict.resize;
  }
};

export default ButtonTypeEdit;

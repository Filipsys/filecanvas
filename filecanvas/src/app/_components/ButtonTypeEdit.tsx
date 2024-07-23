"use client";

import Image from "next/image";

import edit from "../../../public/navicons/edit.svg";
import pan from "../../../public/navicons/pan.svg";
import resize from "../../../public/navicons/resize.svg";

import styles from "../../../styles/Page.module.css";

const ButtonTypeEdit = (props: { onClick: () => void; buttonType: string }) => {
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

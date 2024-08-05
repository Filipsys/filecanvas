"use client";

import { HandIcon, TransformIcon, Pencil2Icon } from "@radix-ui/react-icons";

import styles from "../../../styles/Page.module.css";

export const ButtonTypeEdit = (props: {
  onClick: () => void;
  buttonType: string;
}) => {
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

        <Pencil2Icon className={styles.itemImage} />
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

        <HandIcon className={styles.itemImage} />
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

        <TransformIcon className={styles.itemImage} />
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

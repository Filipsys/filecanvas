"use client";

import addElement from "../functions/addElement";

import { ImageIcon, Link2Icon, FileTextIcon } from "@radix-ui/react-icons";

import styles from "../../../styles/Page.module.css";

export const ButtonTypeInsert = ({ buttonType }: { buttonType: string }) => {
  const handleClick = async () => {
    await addElement();
  };

  const typesDict = {
    image: (
      <button className={styles.navbarItem} onClick={handleClick}>
        <ImageIcon className={styles.itemImage} />
      </button>
    ),
    link: (
      <button className={styles.navbarItem} onClick={handleClick}>
        <Link2Icon className={styles.itemImage} />
      </button>
    ),
    text: (
      <button className={styles.navbarItem} onClick={handleClick}>
        <FileTextIcon className={styles.itemImage} />
      </button>
    ),
  };

  switch (buttonType) {
    case "image":
      return typesDict.image;
    case "link":
      return typesDict.link;
    case "text":
      return typesDict.text;
    default:
      return typesDict.text;
  }
};

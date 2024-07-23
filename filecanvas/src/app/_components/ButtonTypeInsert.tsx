"use client";

import Image from "next/image";
import addElement from "../functions/addElement";

import image from "../../../public/navicons/image.svg";
import link from "../../../public/navicons/link.svg";
import article from "../../../public/navicons/article.svg";

import styles from "../../../styles/Page.module.css";

export const ButtonTypeInsert = ({ buttonType }: { buttonType: string }) => {
  const handleClick = async () => {
    await addElement();
  };

  const typesDict = {
    image: (
      <button className={styles.navbarItem} onClick={handleClick}>
        <Image alt="image" src={image} className={styles.itemImage} />
      </button>
    ),
    link: (
      <button className={styles.navbarItem} onClick={handleClick}>
        <Image
          alt="link"
          src={link}
          className={styles.itemImage}
          style={{ transform: "rotate(-45deg)" }}
        />
      </button>
    ),
    text: (
      <button className={styles.navbarItem} onClick={handleClick}>
        <Image alt="article" src={article} className={styles.itemImage} />
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

"use client"

import Image from "next/image";
import addElement from "../functions/addElement";
import image from "../../../public/navicons/image.svg";

import styles from "../../../styles/Page.module.css";

const AddButton = () => {
    const handleClick = async () => {
        await addElement();
    };

    return (
        <button className={styles.navbarItem} onClick={handleClick}>
            <Image alt="image" src={image} className={styles.itemImage} />
        </button>
    );
}

export default AddButton;
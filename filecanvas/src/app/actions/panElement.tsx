// "use client";

// import { useState } from "react";

// const panElement = (hoveredElement: HTMLElement) => {
//   function hoverPan() {
//     console.log("Hover pan");

//     const currentElement = document.querySelector(
//       "[id^='element-']:hover",
//     ) as HTMLElement;

//     if (currentElement) {
//       currentElement.style.cursor = "grab";
//     }
//   }

//   function removeHoverPan() {
//     console.log("Remove hover pan");

//     if (hoveredElement) {
//       hoveredElement.style.cursor = "default";
//     }
//   }

//   document.querySelectorAll("[id^='element-']").forEach((element) => {
//     element.addEventListener("mouseenter", hoverPan);
//     element.addEventListener("mouseleave", removeHoverPan);
//   });
// };

// const panMenu = {
//   panElement,
// };

// export default panMenu;

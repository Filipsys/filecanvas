"use client";

function hoverPan() {
  console.log("Hover pan");
}

function removeHoverPan() {
  console.log("Remove hover pan");
}

export default function panElement(element: HTMLElement) {
  console.log("Panning element");

  element.addEventListener("mouseenter", hoverPan);
  element.addEventListener("mouseleave", removeHoverPan);
}

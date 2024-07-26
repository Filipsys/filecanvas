"use client";

import { useState } from "react";
import { createTRPCClient, httpBatchLink } from "@trpc/client";

import "../../../styles/elements.css";

const icons = {
  move: <div className="invisible group-hover:visible"></div>,
};

export function CanvasIconWrapper(props: { mode: "move" | null }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "red",
        position: "absolute",
        top: "100px",
        left: "100px",
      }}
    >
      {/* ... stuff */}
      {isHovering && "hovering"}
      {!isHovering && "not hovering"}

      {props.mode && icons[props.mode]}
    </div>
  );
}

export function MyCanvasElement(props: {
  mode: "move" | null;
  x: number;
  y: number;
  width: number;
  height: number;
  data: string | null;
  dataLink: string | null;
}) {
  return (
    <div
      className="group"
      style={{
        width: props.width || "fit-content",
        height: props.height,
        top: props.y,
        left: props.x,
        backgroundColor: "#0e4145",
        position: "absolute",
        border: "3px solid #12585d",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <div
        style={{
          fontSize: "20px",
          color: "white",
          verticalAlign: "top",
          textAlign: "left",
          userSelect: "none",
        }}
      >
        {props.data ? props.data : props.dataLink}
      </div>

      {props.mode && icons[props.mode]}

      <button
        onClick={async () => {
          // const result = await client.elementList.query();
          // console.log(result);
        }}
      >
        test
      </button>
    </div>
  );
}

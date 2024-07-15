"use client";

import { useState } from "react";

export default function ActionHandler( { newAction }: { newAction: string } ) {
  const [action, setAction] = useState("");
  setAction(newAction);
  
  return <div>Action: {action}</div>;
}

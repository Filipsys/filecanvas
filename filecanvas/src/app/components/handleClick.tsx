"use client";

import React from "react";

function handleClick() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [likes, setLikes] = React.useState(0);
    setLikes(likes + 1);

    console.log(likes);
}

export default handleClick;

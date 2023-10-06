import React, { useState } from "react"

export function F1() {
    const [count, SetCount] = useState(0);
    const handleChange = (event) => {
        const wordcount = event.target.value.split(" ").filter(Boolean).length
        SetCount(wordcount);
    }

    return (
        <div>
            <textarea style={{ border: "2px solid black", borderRadius: "7px" }} rows="7" cols="60" onChange={handleChange} />
            <p class="text-dark">Word Count: {count}</p>
        </div>
    )
}
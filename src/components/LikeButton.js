import React, { useState } from 'react'

export default function LikeButton() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={handleClick}> Like { count } </button>
        </div>
    )
}

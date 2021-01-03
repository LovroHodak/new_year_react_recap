import React, { useState } from 'react'

export default function DislikeButton() {

    const  [ count, setCount ] = useState(0)

    return (
        <div>
            <button onClick={() => {setCount(count - 1)}} > Dislike { count } </button>
        </div>
    )
}

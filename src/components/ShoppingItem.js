import React from 'react'

export default function ShoppingItem(props) {

    let myStyle = {
        textDecoration: props.singleItem.checked ? 'line-through' : 'none'
    }

    return (
        <div>
            <p style={myStyle} >{props.singleItem.title}</p>
            <button onClick={() => {props.onCheck(props.singleItem.id)}} >Check</button>
            <button onClick={() => {props.onDelete(props.singleItem.id)}} >Delete</button>
        </div>
    )
}

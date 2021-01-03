import React from 'react'

export default function StudentDetail(props) {
    return (
        <div>
            <h3>Hey from StudentDetail, {props.detail.name}, id: {props.detail.id}  !</h3>
            <button onClick={() => {props.deleteHandler(props.detail.id)}} >Delete</button>
        </div>
    )
}

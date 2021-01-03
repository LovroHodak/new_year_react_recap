import React from 'react'

export default function AddItem(props) {
    console.log(props)
    return (
        <form onSubmit={props.checkAdd} >
            <input type='text' name='newAddItem' />
            <button type='submit' >ADD</button>
        </form>
    )
}

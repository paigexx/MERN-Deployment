import React from "react"
import axios from "axios"

const DeleteButton =  props => {
    const {_id, callbackFunction} = props 
    const handleDelete = e => {
        axios.delete('http://localhost:8000/api/pirate/delete/' + _id)
            .then(res => {
                callbackFunction();
            })
    }
    return (
        <button className="btn btn-danger" onClick={handleDelete}>Walk the Plank</button>
    )
}

export default DeleteButton
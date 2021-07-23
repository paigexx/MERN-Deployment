import React from "react"
import axios from "axios"
import {Link} from "@reach/router"
import DeleteButton from "./DeleteButton"

const PirateList = props => {
    const {pirateList, setPirateList} = props

    const removeFromDom = _id => {
        setPirateList(pirateList.filter(pirate => pirate._id != _id ))
    } 

    setPirateList(pirateList.sort((a,b) => a.name.localeCompare(b.name)))

    return(
        <div style={{display: "flex", flexWrap: "wrap"}}>
            { pirateList.map((pirate, i) => {
                return (
                <div className="card" style={{width: "18rem"}}>
                    <img src={pirate.image} alt="pirate image" className="card-img-top" style={{height: "18rem", width: "18rem"}}/>
                    <div className="card-body">
                        <p className="card-title">{pirate.name}</p>
                        <Link className="btn btn-primary" to={`/pirate/${pirate._id}`}>View Pirate</Link>
                        <DeleteButton _id={pirate._id} callbackFunction={() => removeFromDom(pirate._id)}/>
                    </div>
                </div> 
                )
            })}
        </div>
    )
}

export default PirateList 
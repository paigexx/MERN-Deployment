import React, {useEffect, useState} from "react"
import axios from "axios"
import { Link, navigate } from "@reach/router"
import Navbar from "../components/NavBar"

const Pirate = props => {
    const [pirate, setPirate] = useState({})
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate/" + props._id)
            .then(res => setPirate(res.data.results))
    }, [])

    useEffect(() => {
        axios.put('http://localhost:8000/api/pirate/update/' + pirate._id, pirate)
            .then(res => {
                if(res.data.results){
                    console.log("The feature was changed")
                }
                else {
                    console.log("There were errors")
                    setErrors(res.data)}    
            })
            .catch (err => console.log(err))    
        }, [pirate.pegLeg, pirate.hookHand, pirate.eyePatch] )

    return (
        <div>
            <Navbar/>
            <h2>{pirate.name}</h2>
            <img src={pirate.image} alt={pirate.name} />
            <h3>{pirate.catchPhrase}</h3>
            <p>Position: {pirate.position}</p>
            <p>Treasures: {pirate.treasureChests}</p>
            <p>Peg Leg: {pirate.pegLeg ? "Yes": "No"}</p>
            <button className={pirate.pegLeg ? "red": "green" } onClick={(e => setPirate({...pirate, ["pegLeg"]: !pirate.pegLeg})) }>{pirate.pegLeg ? "No": "Yes"}</button>
            <p>Eye Patch: {pirate.eyePatch ? "Yes": "No"}</p>
            <button className={pirate.eyePatch ? "red": "green" } onClick={(e => setPirate({...pirate, ["eyePatch"]: !pirate.eyePatch})) }>{pirate.eyePatch? "No": "Yes"}</button>
            <p>Hook Hand: {pirate.hookHand ? "Yes": "No"}</p>
            <button className={pirate.hookHand? "red": "green" }  onClick={(e => setPirate({...pirate, ["hookHand"]: !pirate.hookHand})) }>{pirate.hookHand ? "No": "Yes"}</button><br/><hr/>
        </div>
    )
}

export default Pirate 
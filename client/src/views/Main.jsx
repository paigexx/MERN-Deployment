import React, {useState, useEffect} from "react"
import {Link} from "@reach/router"
import axios from 'axios'
import PirateList from "../components/PirateList"
import Navbar from "../components/NavBar"

const Main = props => {
    const [pirateList, setPirateList] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate")
            .then(res => {
                setPirateList(res.data.results)
                setLoaded(true)
            })
            .catch(err => console.log(err))}, [])

    return (
        <div>
            <Navbar/>
            <h1>Pirate Crew</h1>
            <PirateList pirateList={pirateList} setPirateList={setPirateList} />
        </div>
    )
}

export default Main 
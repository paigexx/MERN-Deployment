import React, {useState} from "react"
import Form from "../components/Form"
import axios from "axios"
import {navigate} from "@reach/router"
import Navbar from "../components/NavBar"

const Add = props => {
    const [errors, setErrors ] = useState({})
    const [myForm, setMyForm] = useState({
            name: "",
            image: "",
            treasureChests: 0, 
            catchPhrase: "", 
            position: "firstMate",
            pegLeg: true, 
            eyePatch: true, 
            hookHand: true 
    })


    const handleOnChange = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(myForm)
        axios.post("http://localhost:8000/api/pirate/create", myForm)
        .then (res => {
            if(res.data.results){
                console.log("It worked, from Add view")
                navigate("/")
                
            } else {
                console.log("There were errors")
                setErrors(res.data)
            }
        })
        .catch (err => console.log(err))
    }
    return (
        <div>
            <Navbar/>
            <h1>Add Pirate</h1>
            <Form errors={errors} handleOnChange={handleOnChange} handleSubmit={handleSubmit} setMyForm={setMyForm} myForm={myForm}/> 
        </div>
    )
}

export default Add 
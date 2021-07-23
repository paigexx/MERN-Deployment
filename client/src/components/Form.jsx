import React from "react"

const Form = props => {
    const {handleSubmit, handleOnChange, errors, myForm, setMyForm} = props

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* name */}
                <label htmlFor="name">Pirate Name:</label>
                <input type="text" name="name" onChange={handleOnChange} value={myForm.name}/><br/>
                { 
                errors.name ? <span className="text-danger">{errors.name.message}</span>   : "" 
                }
                {/* url */}
                <label htmlFor="name">Pirate Image URL:</label>
                <input type="text" name="image" onChange={handleOnChange} value={myForm.image}/><br/>
                { 
                errors.image ? <span className="text-danger">{errors.image.message}</span> : "" 
                }
                {/* treasure chests */}
                <label htmlFor="treasureChests"># of Treasure Chests: </label>
                <input type="number" name="treasureChests" onChange={handleOnChange} value={myForm.treasureChests}/><br/>
                { 
                errors.treasureChests ? <span className="text-danger">{errors.treasureChests.message}</span> : "" 
                }
                {/* catch phrase */}
                <label htmlFor="catchPhrase">Pirate Catch Phrase:</label>
                <input type="text" name="catchPhrase" onChange={handleOnChange} value={myForm.catchPhrase}/><br/>
                { 
                errors.catchPhrase ? <span className="text-danger">{errors.catchPhrase.message}</span> : "" 
                }
                {/* crew position */}
                <label htmlFor="position">Crew Position: </label>
                <select onChange={handleOnChange} name="position" value={myForm.position}>
                    <option value="captain">Captain</option>
                    <option value="firstMate">First Mate</option>
                    <option value="quarterMaster">Quarter Master</option>
                    <option value="boatswain">Boatswain</option>
                    <option value="powderMonkey">Powder Monkey</option>
                </select><br/>
                {/* peg leg */}
                <label htmlFor="pegLeg">Peg Leg</label>
                <input onChange={ e=> setMyForm({...myForm, pegLeg: e.target.checked})} type="checkbox" name="pegLeg" checked={myForm.pegLeg}/><br/>
                {/* eye patch */}
                <label htmlFor="eyePatch">Eye Patch</label>
                <input onChange={ e=> setMyForm({...myForm, eyePatch: e.target.checked})} type="checkbox" name="eyePatch" checked={myForm.eyePatch}/><br/>
                {/* hook hand */}
                <label htmlFor="hookHand">Hook Hand</label>
                <input onChange={ e=> setMyForm({...myForm, hookHand: e.target.checked})} type="checkbox" name="hookHand" checked={myForm.hookHand}/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Form 
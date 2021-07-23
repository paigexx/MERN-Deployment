import React from "react"
import {Link} from '@reach/router'

const Navbar = props => {
    return(
        <div className="navbar navbar-light bg-light">
            <div className="navbar-nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/pirate/add"className="nav-link">Add Pirate</Link>
            </div>
        </div>
    )
}
export default Navbar
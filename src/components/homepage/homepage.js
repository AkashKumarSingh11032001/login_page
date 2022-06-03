import React from "react"
import "./homepage.css"
import Register from "../register/register"
// import Login from "./components/login/login"

const Homepage = ({ setLoginUser }) => {
    return (
        <div className="homepage">
            <h3>Akash - akashkumarsingh11032001@gmail.com - 8957564645 - PG - New-Zealand </h3>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage
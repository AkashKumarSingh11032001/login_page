import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
        dob: "",
        course:"",
        country: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, contact, course, country, password, reEnterPassword } = user
        if (name && email && contact && course && country && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    console.log(res)
                    // alert(res.data.message)
                    // history.push("/login")
                })
        } else {
            alert("invlid input")
        }

    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Create User Profile</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
            <input type="phone" name="contact" value={user.contact} placeholder="Contact Number" onChange={handleChange}></input>
            <div>
                <label name="course" >Course Level:</label>
                <select id="course" name="course" value={user.course} onChange={handleChange}>
                    <option selected>UG</option>
                    <option>PG</option>
                </select>
            </div>
            <div>
                <label name="country" >Country Preferences:</label>
                <select id="country" name="country" value={user.country} onChange={handleChange} >
                    <option selected>USA</option>
                    <option >Australia</option>
                    <option >New-Zealand</option>
                    <option >Canada</option>
                    <option >UK</option>
                    <option >Ireland</option>
                    <option >Germany</option>
                </select>
            </div>
            <input type="date" name="dob" value={user.dob} placeholder="DOB" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register
import { useState, useContext } from "react"
import axios from "axios"
import AuthContext from "../store/authContext"

const Auth = () => {
    const { dispatch } = useContext(AuthContext)

    const [isRegistering, setIsRegistering] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleFormSubmit = e => {
        e.preventDefault()
        axios
            .post(`/api/${isRegistering ? "register" : "login"}`, {
                username,
                password
            })
            .then(res => {
                dispatch({ type: "LOGIN", payload: res.data })
            })
            .catch(err => console.log(err))
    }

    // console.log(isRegistering)
    return (
        <div className="flex flex-col items-center w-full border-dashed border-2">
            <h1>Welcome to Good Goods!</h1>
            <h2>Please {isRegistering ? "register" : "login"} below </h2>
            <form
                className="border border-blue-600 flex flex-col"
                onSubmit={e => handleFormSubmit(e)}
            >
                <input
                    placeholder="Enter your username"
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    placeholder="Enter your password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <p>Need to {isRegistering ? "login" : "register"}?</p>
            <button onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? "login" : "register"}
            </button>
        </div>
    )
}

export default Auth

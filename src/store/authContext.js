import { useReducer, useEffect, createContext } from "react";

const initialState = {
    userId: null,
    token: null,
    exp: null,
    username: null
}

const AuthContext = createContext()

const getLocalData= () => {
    const storedToken = localStorage.getItem('token')
    const storedExp = localStorage.getItem('exp')
    const storedUserId = localStorage.getItem('userId')
    const storedUsername = localStorage.getItem('username')

    let remainingTime = storedExp - new Date().getTime()
    if(remainingTime < 0){
        localStorage.clear()
    }

    return {
        token: storedToken,
        exp: storedExp,
        userId: storedUserId,
        username: storedUsername
    }
}

const AuthContextProviderComponent = (props) => {
    const reducer = (state, action) => {
        switch(action.type){
            case 'LOGIN':
                const {token, userId, username, exp} = action.payload
                localStorage.setItem("token", token)
                localStorage.setItem("userId", userId)
                localStorage.setItem("username", username)
                localStorage.setItem("exp", exp)
                return {...state, token, exp, userId, username}
            case 'LOGOUT': 
                localStorage.clear()
                return initialState
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        let localData = getLocalData()
        if(localData){
            dispatch({type: "LOGIN", payload: localData})
        }
    }, [])

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {props.children} 
            {/* App.js ^^ */}
        </AuthContext.Provider>
    )

}

export default AuthContext
export {AuthContextProviderComponent}
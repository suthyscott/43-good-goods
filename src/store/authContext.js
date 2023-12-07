import { useReducer, useEffect, createContext } from "react";

const initialState = {
    userId: null,
    token: null,
    exp: null,
    username: null
}

const AuthContext = createContext()


const AuthContextProviderComponent = (props) => {
    const reducer = (state, action) => {
        switch(action.type){
            case 'LOGIN':
                const {token, userId, username, exp} = action.payload
                return {...state, token, exp, userId, username}
            case 'LOGOUT': 
                return initialState
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {props.children} 
            {/* App.js ^^ */}
        </AuthContext.Provider>
    )

}

export default AuthContext
export {AuthContextProviderComponent}
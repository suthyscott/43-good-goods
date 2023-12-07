import { NavLink } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../store/authContext"

const Header = () => {
  const {state, dispatch} = useContext(AuthContext)
  console.log(state)
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      {state.token ? <NavLink to='/cart'>My Cart</NavLink> : null}
      {state.token ? <button onClick={() => dispatch({type: 'LOGOUT'})}>Logout</button> : <NavLink to='/auth'>Login or Register</NavLink>}
    </nav>
  )
}

export default Header
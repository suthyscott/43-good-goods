import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/cart'>My Cart</NavLink>
      <NavLink to='/auth'>Login or Register</NavLink>
    </nav>
  )
}

export default Header
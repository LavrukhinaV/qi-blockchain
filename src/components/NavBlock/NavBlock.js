import { NavLink } from 'react-router-dom';
import "./NavBlock.css"

function NavBlock() {

  return (
    <>
      <NavLink to="/" className="nav-block__link">
        Docs
      </NavLink>
      <NavLink to="/" className="nav-block__link">
        FAQ
      </NavLink>
      <NavLink to="/" className="nav-block__link">
        Terms of Service
      </NavLink>
    </>
  )
}

export default NavBlock;
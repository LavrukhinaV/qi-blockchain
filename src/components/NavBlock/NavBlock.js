import { NavLink } from 'react-router-dom';
import "./NavBlock.css"

function NavBlock({className}) {

  return (
    <>
      <NavLink to="/" className={className}>
        Docs
      </NavLink>
      <NavLink to="/" className={className}>
        FAQ
      </NavLink>
      <NavLink to="/" className={className}>
        Terms of Service
      </NavLink>
    </>
  )
}

export default NavBlock;
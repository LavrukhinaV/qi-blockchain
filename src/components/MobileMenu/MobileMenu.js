import { NavLink } from 'react-router-dom';
import './MobileMenu.css'

function MobileMenu(props) {
  return (
    <div className={`mobile-menu ${props.isOpen && "mobile-menu_active"}`}>
    <button type="button" className="mobile-menu__btn_close" onClick={props.onClose}/>
      <NavLink exact activeClassName= "mobile-menu__link_active" className="mobile-menu__link" to="/">Link name</NavLink>
      <NavLink activeClassName= "mobile-menu__link_active" className="mobile-menu__link" to="/">Link name</NavLink>
    </div>
  )
}

export default MobileMenu;
import { NavLink } from 'react-router-dom';
import css from '../Menu/Menu.module.css';

const Menu = () => {
    return (
        <ul className = {css.menu}>
            <li>
              <NavLink className={css.navLink} to='/' end > Home </NavLink>
            </li>
            <li>
             <NavLink className={css.navLink} to='/movies'>Movies</NavLink>
            </li>
        </ul>   
    )
}

export default Menu; 
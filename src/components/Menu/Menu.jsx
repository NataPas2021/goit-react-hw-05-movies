import css from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = ( )=> {
    return (
        <ul className={css.menu}>
        <li>
            <NavLink className={css.link} to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink className={css.link} to='/movies'>Movies</NavLink>
        </li>
        </ul>
    )  
}

export default Menu;
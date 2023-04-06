import SearchBar from "./SearchBar";
import style from "./components-css/nav.module.css";
import { NavLink } from "react-router-dom";

const Nav=({onSearch})=>{

    return(
        <div className={style.nav}>
                <NavLink to='/about' className={style.NavLink} id={style.about}><b>About</b></NavLink>
                <NavLink to='/home' className={style.NavLink} id={style.home}><b>Home</b></NavLink>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav
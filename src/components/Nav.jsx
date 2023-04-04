import SearchBar from "./SearchBar";
import style from "./components-css/nav.module.css";
const Nav=({onSearch})=>{

    return(
        <div className={style.nav}>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav
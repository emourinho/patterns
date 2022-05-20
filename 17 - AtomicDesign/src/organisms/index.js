import React from 'react'
import NavbarMenu from '../../molecules/navbar-menu'
import SearchKeyword from '../../molecules/search-keyword'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <nav>
            <Link to="/"></Link>
            <NavbarMenu />
            <SearchKeyword />
        </nav>
    )
}

export default Header
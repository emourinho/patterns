import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMenu = () => {
    return (
        <ul>
            <li>
                <Link to="/kanban">Kanban</Link>
            </li>
            <li>
                <Link to="/atomic">Atomic</Link>
            </li>
        </ul>
    )
}

export default NavbarMenu
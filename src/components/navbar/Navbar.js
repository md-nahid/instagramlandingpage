import React from 'react'
import {Menu} from "./Navbar.data"
import Wrapper, { List, Navtext } from "./Navbar.styled"



const Navbar = () => {
    return (
        <Wrapper>
            <List>
                {Menu.map( item => (
                    <li key={item.id}><a href={item.pathname}>{item.name}</a></li>
                ))}
                <li>LANGUAGE</li>
            </List>
            <Navtext>
                <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
            </Navtext>
        </Wrapper>
    )
}

export default Navbar

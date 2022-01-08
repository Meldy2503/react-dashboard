import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons'

function Navbar() {
    const [menuBar, setMenuBar] = React.useState(false);

    function showSideBar() { 
        setMenuBar(!menuBar)
    }
    
    return (
        <> 
            <div>
                <Link to="#" className='navbar'>
                    < FaBars />
                </Link>
            </div> 
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="#" className='navbar-items'>
                                < AiOutlineClose />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>   
        </>
    )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { menuBarData } from './MenuBarData';


function Navbar() {
    const [menuBar, setMenuBar] = React.useState(false);

    function showSideBar() { 
        setMenuBar(!menuBar)
    }
    
    return (
        <> 
            <div className='navbar'>
                <Link to="#" className='navbar-button' onClick={showSideBar}>
                    < FaBars />
                </Link>
            </div> 
            <div className={ menuBar ? 'nav-menu active' : 'nav-menu'} onClick={showSideBar}>
                <Link to="#" className='navbar-button' >
                     < AiOutlineClose />
                </Link>
                {menuBarData.map((options, index) => {
                    return (
                        <nav className='menu-nav'>
                            <ul className='menu-ul'>
                                <li key={index} className={options.cName}>
                                    <Link to={options.path}>
                                       {options.icon}
                                       {options.title}
                                    </Link>
                                </li>
                            </ul>
                        </nav>)
                    })}
            </div>   
        </>
    )
}

export default Navbar

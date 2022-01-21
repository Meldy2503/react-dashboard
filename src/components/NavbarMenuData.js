import React from 'react';
import { FaHome, FaShoppingCart} from "react-icons/fa";
import { AiOutlineMail, AiFillBook } from 'react-icons/ai';
import { RiTeamFill } from 'react-icons/ri';
import { IoHelpCircle } from 'react-icons/io5';

export const menuBarData =[ 
 {
    title: 'Home',
    icon: < FaHome className='menu-icon'/>,
    path: '/',
    cName: 'menu-list'
},
 {
    title: 'Messages',
    icon: < AiOutlineMail className='menu-icon'/>,
    path: '/Messages',
    cName: 'menu-list'
 },
 {
    title: 'Reviews',
    icon: < AiFillBook className='menu-icon'/>,
    path: '/Reports',
    cName: 'menu-list'
 },
 {
    title: 'Products',
    icon: < FaShoppingCart className='menu-icon'/>,
    path: '/Products',
    cName: 'menu-list'
 },
 {
    title: 'Team',
    icon: < RiTeamFill className='menu-icon'/>,
    path: '/Team',
    cName: 'menu-list'
 },
 {
    title: 'Support',
    icon: < IoHelpCircle className='menu-icon'/>,
    path: '/Support',
    cName: 'menu-list'
 }
]
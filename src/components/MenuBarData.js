import React from 'react';
import { FaHome, FaShoppingCart} from "react-icons/fa";
import { AiOutlineMail, AiFillBook } from 'react-icons/ai';
import { RiTeamFill } from 'react-icons/ri';
import { IoHelpCircle } from 'react-icons/io5';

export const menuBarData =[ 
 {
    title: 'Home',
    icon: < FaHome />,
    path: '/',
    cName: 'menu-list'
},
 {
    title: 'Messages',
    icon: < AiOutlineMail />,
    path: '/Messages',
    cName: 'menu-list'
 },
 {
    title: 'Reports',
    icon: < AiFillBook />,
    path: '/Reports',
    cName: 'menu-list'
 },
 {
    title: 'Products',
    icon: < FaShoppingCart />,
    path: '/Products',
    cName: 'menu-list'
 },
 {
    title: 'Team',
    icon: < RiTeamFill />,
    path: '/Team',
    cName: 'menu-list'
 },
 {
    title: 'Support',
    icon: < IoHelpCircle />,
    path: '/Support',
    cName: 'menu-list'
 }
]
import React from 'react';
import { FaHome, FaShoppingCart} from "react-icons/fa";
import { AiOutlineMail, AiFillBook } from 'react-icons/ai';
import { RiTeamFill } from 'react-icons/ri';
import { IoHelpCircle } from 'react-icons/io';

export const menuBarData =[ 
 {
    title: 'Home',
    icon: < FaHome />,
    path: "/"
},
 {
    title: 'Messages',
    icon: < AiOutlineMail />,
    path: "/Messages"
 }
 {
    title: 'Reports',
    icon: < AiFillBook />,
    path: "/Reports"
 }
 {
    title: 'Products',
    icon: < FaShoppingCart />,
    path: "/Products"
 }
 {
    title: 'Team',
    icon: < RiTeamFill />,
    path: "/Team"
 }
 {
    title: 'Support',
    icon: < IoHelpCircle />,
    path: "/Support"
 }
]
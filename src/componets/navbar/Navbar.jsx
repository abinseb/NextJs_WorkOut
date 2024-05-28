import React from 'react'
import Link from 'next/link'
import Links from './links/Links'
import Styles from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={Styles.container}>
    <div>Logo</div>
    <div>
       <Links/>
    </div>
    </div>
  )
}

export default Navbar

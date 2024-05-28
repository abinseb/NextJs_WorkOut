"use client"
import React from 'react';
import Link from 'next/link';
import Styles from './navbarlink.module.css'
import { usePathname } from 'next/navigation'
const Navlink = ({item}) => {
  const pathName = usePathname();
  console.log("link",pathName , item);
  return (
    <Link   href={item.path} className={`${Styles.container} ${pathName===item.path && Styles.active}`} >{item.title}</Link>
  )
}

export default Navlink;


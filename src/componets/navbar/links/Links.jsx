
import React from 'react'
import styles from './links.module.css'
import Navlink from './navbarlink/Navbarlink'
const Links = () => {
    const link =[
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"Blog",
            path:"/blog"
        },
    ]

    const isSession = true;
    const isadmin = true;

  return (
    <div className={styles.link}>
      {link.map((link=>(
       <Navlink item={link} key={link.title}/>
      )))}

      {
        isSession ?(
         <>
          {
          isadmin && (
            <Navlink item={{title: "Admin", path: "/admin"}} />
          )
         } 
         <button>Logout</button>
         </>
        
        )
        :(
          <Navlink item={{title:"Login",path:"/login"}} />
        )
      }
    </div>
    
  )
}

export default Links

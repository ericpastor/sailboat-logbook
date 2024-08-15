"use client"

import { signOut, useSession } from "next-auth/react"
import styles from "./links.module.css"
import NavLink from "./navLink/navLink"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Links() {
    const links = [
        {
            name: "Homepage",
            href: "/"
        },
        {
            name: "Sailboat's data",
            href: "/sailboat-data"
        },
        {
            name: "Equipment",
            href: "/equipment"
        },
        {
            name: "Logbook",
            href: "/logbook"
        },
        {
            name: "Trips",
            href: "/trips"
        },
        {
            name: "Crew Members",
            href: "/crew-members"
        },

    ]

    const [open, setOpen] = useState(false)

    const { data: session, status } = useSession()

    const handleLogout = () => {
        signOut({ callbackUrl: '/' })
    }

    return (
        <>

            {

                session?.user ? (

                    <div className={styles.container}>

                        <div className={styles.links}>
                            {links.map((link) => (
                                <NavLink item={link} key={link.name} />
                            ))}
                            <button className={styles.logout} onClick={() => handleLogout()}>Logout</button>

                        </div>

                        <button className={styles.menuBtn} onClick={() => setOpen((prev) => !prev)}>Menu</button>





                        {open && (<div className={styles.mobileLinks}>
                            {links.map((link) => (
                                <NavLink item={link} key={link.name} />
                            ))}
                            <button className={styles.logout} onClick={() => handleLogout()}>Logout</button>

                        </div>)}
                    </div>) : (

                    <div className={styles.container}>
                        <div className={styles.links}>
                            <div className={styles.item}><Link href="/register">Register</Link></div>

                            <div className={styles.item}><Link href="/login">Login</Link></div>
                        </div>
                        <button className={styles.menuBtn} onClick={() => setOpen((prev) => !prev)}>
                            {open ? "✖" : "Menu"}
                        </button>
                        {open && (<div className={styles.mobileLinks}>
                            <div className={styles.item}><Link href="/register">Register</Link></div>
                            <div className={styles.item}><Link href="/login">Login</Link></div>
                        </div>)}
                    </div>
                )
            }
        </>

    )
}
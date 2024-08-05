"use client"

import styles from "./links.module.css"
import NavLink from "./navLink/navLink"
import { useState } from "react"

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
    ]

    const [open, setOpen] = useState(false)

    return (
        <div className={styles.container}>

            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.name} />
                ))}
            </div>

            <button className={styles.menuBtn} onClick={() => setOpen((prev) => !prev)}>Menu</button>


            {open && (<div className={styles.mobileLinks}>
                {links.map((link) => (
                    <NavLink item={link} key={link.name} />
                ))}
            </div>)}
        </div>
    )
}
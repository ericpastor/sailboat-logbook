import Link from "next/link"

import styles from "./links.module.css"
import NavLink from "./navLink/navLink"

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
    return (
        <div className={styles.links}>
            {links.map((link) => (
                <NavLink item={link} key={link.name} />
            ))}
        </div>
    )
}
"use client"

import Link from "next/link"
import styles from "./navLink.module.css"
import { usePathname } from "next/navigation"

interface Item {
    name: string
    href: string
}

export default function NavLink({ item }: { item: Item }) {

    const pathname = usePathname()

    return (
        <Link
            href={item.href}
            className={`${styles.container} ${pathname === item.href ? styles.isActive : ""}`}
        >
            {item.name}</Link>
    )
}
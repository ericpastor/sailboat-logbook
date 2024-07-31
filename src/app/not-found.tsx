"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NotFound() {
    const pathname = usePathname()
    return (
        <div>
            <h2>Page Not Found with pathname {pathname}</h2>
            <Link href={"/"}>Home</Link>
        </div>
    )
}
import Link from "next/link"

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
        <div>
            {links.map((link) => (
                <Link href={link.href} key={link.name}>{link.name}</Link>
            ))}
        </div>
    )
}
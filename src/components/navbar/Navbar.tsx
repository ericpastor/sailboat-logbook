import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css"
import Image from "next/image";

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>  <Image src="/sailing.png" alt="icon sailboat" width={50} height={50}></Image></Link>
            <div>
                <Links />
            </div>
        </div>
    )
}
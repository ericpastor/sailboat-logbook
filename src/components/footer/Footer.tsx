import { italianno } from "@/app/fonts"
import styles from "./footer.module.css"


export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Captain&apos;s Logbook 2024</div>
            <div className={italianno.variable}>
                <div className={styles.text}>Sailing the 7 Seas</div>
            </div>
        </div>
    )
}
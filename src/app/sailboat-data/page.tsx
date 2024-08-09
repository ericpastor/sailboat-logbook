import Image from "next/image";
import styles from "./sailboatData.module.css"

export default function SailboatData() {
    return (
        <div className={styles.container}>
            <div className={styles.specifications}>
                <h1>Callejón de la Luna</h1>
                <h2>Sailboat Specifications</h2>
                <p>Length Overall:</p>
                <p>Length at Waterline:</p>
                <p>Beam:</p>
                <p>Draft:</p>
                <p>Mast Height (Main):</p>
                <p>Mast Height (Mizzen):</p>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/sailboat.png" alt="sailboat" width={400} height={400} />
            </div>
        </div>
    )
}

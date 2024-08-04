import Image from 'next/image'
import styles from './home.module.css'
import { italianno, montserrat } from './fonts'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={montserrat.variable}>
          <h1 className={styles.title}>Keep your vuoyages details safe with Captain&apos;s Logbook</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quo placeat omnis obcaecati iusto amet nisi, quae sit molestias dolorum expedita nihil impedit alias magnam repellat dolor quam? Quasi, sequi.</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/home-sailboat.png" alt="Sailing boat" fill className="styles.sailboat"></Image>
      </div>
    </div>
  )
}

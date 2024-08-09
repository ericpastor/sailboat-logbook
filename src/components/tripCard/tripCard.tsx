import Image from 'next/image'
import styles from './tripCard.module.css'
import Link from 'next/link'
import { italianno } from '@/app/fonts'
import { TripDocument } from '@/types/trip'

export default function TripCard({ trip }: { trip: TripDocument }) {


    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src={"/sailboat.png"} alt='Best photo trip' fill className={styles.img}></Image>
                </div>
                <Link href="/logbook" className={styles.logbook}>
                    <p className={italianno.className} >Logbook</p>
                    <span className={italianno.className}>05.04.2023</span>
                </Link>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.trip}>{trip.title}</h1>
                <p className={styles.desc}>{trip.description}</p>
                <Link href={`/trips/${trip.slug}`}>DETAILS</Link>
            </div>
        </div>
    )
}
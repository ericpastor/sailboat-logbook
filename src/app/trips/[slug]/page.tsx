import Image from 'next/image'
import styles from './singleTrip.module.css'
import { TripDocument } from '@/types/trip'
import { getTrip } from '@/lib/data'
import TripCrewMembers from '@/components/tripCrewMembers/tripCrewMembers'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export default async function SingleTrip({ params }: { params: Params }) {


    const { slug } = params

    const trip: TripDocument = await getTrip(slug)

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/sailboat.png" fill alt='Trip Barcelona to Menorca'></Image>
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>{trip.title}</h2>
                <div className={styles.detail}>
                    <TripCrewMembers />
                </div>
                <div className={styles.content}>
                    <p>Description: {trip.description}</p>
                    <p>Weather: {trip.weatherConditions}</p>
                </div>
            </div>
        </div >
    )
}
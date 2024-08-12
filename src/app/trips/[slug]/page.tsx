import Image from 'next/image'
import styles from './singleTrip.module.css'
import { TripDocument } from '@/types/trip'
import { getTrip } from '@/lib/data'
import TripCrewMembers from '@/components/tripCrewMembers/tripCrewMembers'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { transformDate } from '@/app/utils/conversion'

export const generateMetadata = async ({ params }: Params) => {
    const { slug } = params

    const trip: TripDocument = await getTrip(slug)

    return {
        title: trip.title,
        description: trip.description
    }
}

const getData = async (slug: string) => {
    const res = await fetch(`${process.env.BASE_URL}/api/trips/${slug}`)
    if (!res.ok) {
        throw new Error("Something went wrong!")
    }
    return res.json()
}



export default async function SingleTrip({ params }: { params: Params }) {
    const { slug } = params

    const trip = await getData(slug)

    // const trip: TripDocument = await getTrip(slug)

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/sailboat.png" fill
                    alt='Trip Barcelona to Menorca'></Image>
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>{trip.title}</h2>
                <div className={styles.detail}>
                    <TripCrewMembers />
                </div>
                <div className={styles.content}>
                    <p><span>Departure Port: </span>{trip.departurePort}</p>
                    <p><span>Arraival Port: </span>{trip.arrivalPort}</p>
                    <p><span>Departure Time: </span>{(trip.departureTime)}</p>
                    <p><span>ETA: </span>{(trip.eta)}</p>
                    <p><span>Arraival Time: </span>{(trip.arrivalTime)}</p>
                    <p><span>Description: </span>{trip.description}</p>
                    <p><span>Weather: </span>{trip.weatherConditions}</p>
                    <p><span>Issues: </span>{trip.issues}</p>
                    <p><span>Cargo: </span>{trip.cargoDetails}</p>
                    <p><span>Status: </span>{trip.status}</p>
                </div>
            </div>
        </div >
    )
}
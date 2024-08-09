import TripCard from "@/components/tripCard/tripCard";
import styles from "./trips.module.css"
import { getAllTrips } from "@/lib/data";
import { TripDocument } from "@/types/trip";

export default async function Trips() {
    const trips = await getAllTrips()
    return (
        <div>
            <div className={styles.container}>
                {trips.map((trip: TripDocument) => (
                    <div className={styles.trip} key={trip.tripId}>
                        <TripCard trip={trip} />
                    </div>
                ))}
            </div>
        </div>
    )
}
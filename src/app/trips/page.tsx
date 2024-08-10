import TripCard from "@/components/tripCard/tripCard";
import styles from "./trips.module.css"
import { getAllTrips, getTrip } from "@/lib/data";
import { TripDocument } from "@/types/trip";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trips",
    description: "All trips",
};

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
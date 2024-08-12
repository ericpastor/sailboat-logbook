import TripCard from "@/components/tripCard/tripCard";
import styles from "./trips.module.css"
import { TripDocument } from "@/types/trip";
import { Metadata } from "next";
import { montserrat } from "../fonts";
import Modal from "@/components/modal/Modal";
import { useState } from "react";
import AddTrip from "@/components/addTrip/addTrip";

export const metadata: Metadata = {
    title: "Trips",
    description: "All trips",
};

const getData = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/trips`)
    if (!res.ok) {
        throw new Error("something went wrong")
    }
    return res.json()
}


export default async function Trips() {
    const trips = await getData()
    // const trips = await getAllTrips()
    return (
        <div>
            <AddTrip />
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
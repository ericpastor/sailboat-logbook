'use client'

import { tripSchema } from "@/lib/validationModels";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { montserrat } from "../fonts";
import styles from './create-trip.module.css'
import Link from "next/link";
import { getAllCrewMembers } from "@/lib/data";

export default function SignupForm() {
    const [errors, setErrors] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [issues, setIssues] = useState([''])
    const [pictures, setPictures] = useState([''])


    const router = useRouter()

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const formData = {
            title: event.target.title.value,
            vesselName: event.target.vesselName.value,
            departurePort: event.target.departurePort.value,
            arrivalPort: event.target.arrivalPort.value,
            departureTime: event.target.departureTime.value,
            arrivalTime: event.target.arrivalTime.value,
            eta: event.target.eta.value,
            weatherConditions: event.target.weatherConditions.value,
            description: event.target.description.value,
            issues: issues,
            crewMembers: event.target.crewMembers.value,
            passengersCount: event.target.passengersCount.value,
            cargoDetails: event.target.cargoDetails.value,
            status: event.target.value,
            distance: event.target.status.value,
            vesselType: event.target.distance.value,
            fuelConsumption: event.target.fuelConsumption.value,
            pictures: pictures,
        }

        const data = await fetch(`/api/create-trip`, {
            method: 'POST',
            body: JSON.stringify(formData)
        }).then(res => res.json())



        try {
            const response = tripSchema.safeParse(formData)

            if (!response.success) {
                let errArr: any[] = [];
                const { errors: err } = response.error;
                for (let i = 0; i < err.length; i++) {
                    errArr.push({ for: err[i].path[0], message: err[i].message });
                }
                setErrors(errArr);
                throw err;
            }
            toast.success(`${formData.title} created!`)
            router.push('/login')
            setErrors([]);
        } catch (error) {
            toast.error('Something went wrong...')
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }


    const handleChangeIssue = (event: any, index: number) => {
        const newIssues = [...issues];
        newIssues[index] = event.target.issues.value;
        setIssues(newIssues);
    };

    const handleAddIssue = () => {
        setIssues([...issues, '']);
    };

    const handleRemoveIssue = (index: number) => {
        const newIssues = issues.filter((_, i) => i !== index);
        setIssues(newIssues);
    }
    const handleChangePicture = (event: any, index: number) => {
        const newPictures = [...pictures];
        newPictures[index] = event.target.pictures.value;
        setPictures(newPictures);
    };

    const handleAddPicture = () => {
        setPictures([...pictures, '']);
    };

    const handleRemovePicture = (index: number) => {
        const newPictures = pictures.filter((_, i) => i !== index);
        setPictures(newPictures);
    }

    return (
        <div className={montserrat.variable}>
            <section className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h2 className={styles.title}>Register</h2>
                    <label>Title</label>
                    <input type="text" name='title' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "title")?.message.replaceAll('String', 'Name')}
                    </div>

                    <label>VesselName</label>
                    <input type="text" name='vesselName' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "vesselName")?.message.replaceAll('String', 'VesselName')}
                    </div>

                    <label>DeparturePort</label>
                    <input type="text" name='departurePort' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "departurePort")?.message.replaceAll('String', 'DeparturePort')}
                    </div>

                    <label>arrivalPort</label>
                    <input type="text" name='arrivalPort' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "arrivalPort")?.message.replaceAll('String', 'ArrivalPort')}
                    </div>


                    <label>DepartureTime</label>
                    <input type="date" name='departureTime' />


                    <label>ArrivalTime</label>
                    <input type="date" name='arrivalTime' />


                    <label>ETA</label>
                    <input type="date" name='eta' />


                    <label>Weather Conditions</label>
                    <input type="text" name='weatherConditions' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "weatherConditions")?.message.replaceAll('String', 'WeatherConditions')}
                    </div>

                    <label>Description</label>
                    <input type="text" name='description' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "description")?.message.replaceAll('String', 'Description')}
                    </div>

                    <label>Issues</label>
                    {issues.map((issue, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={issue}
                                onChange={(e) => handleChangeIssue(e, index)}
                            />
                            {errors.find((error) => error.for === "issues")?.message.replaceAll('String', 'Issue')}
                            <button type="button" onClick={() => handleRemoveIssue(index)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddIssue}>Add Issue</button>



                    <label>CrewMembers</label>
                    <input type="text" name='crewMembers' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "crewMembers")?.message.replaceAll('String', 'CrewMembers')}
                    </div>



                    <label>Number of Passengers</label>
                    <input type="number" name='passengersCount' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "passengersCount")?.message.replaceAll('String', 'Number of passengers')}
                    </div>


                    <label>Cargo Details</label>
                    <input type="text" name='cargoDetails' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "cargoDetails")?.message.replaceAll('String', 'Cargo Details')}
                    </div>

                    <label>Status</label>
                    <select name="status" id="status">
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>


                    <label>Distance</label>
                    <input type="number" name='distance' />


                    <label>Vessl Type</label>
                    <input type="text" name='vesseltype' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "vesseltype")?.message.replaceAll('String', 'vesseltype')}
                    </div>

                    <label>Fuel consumption</label>
                    <input type="number" name='fuelConsumption' />

                    <label>Pictures</label>
                    {pictures.map((picture, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={picture}
                                onChange={(e) => handleChangePicture(e, index)}
                            />
                            {errors.find((error) => error.for === "pictures")?.message.replaceAll('String', 'Picture')}
                            <button type="button" onClick={() => handleRemovePicture(index)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddPicture}>Add Picture</button>


                    <button disabled={isLoading} type='submit' className={styles.btn}>{isLoading ? "Saving..." : "Register"}</button>

                    <p>Already a crew member?<Link href="/trips"><span>Login</span></Link></p>
                </form>
            </section>
        </div>
    )
}
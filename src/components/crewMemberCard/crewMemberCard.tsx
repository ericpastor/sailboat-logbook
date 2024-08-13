import { CrewMemberDocument } from "@/types/crewMember";
import styles from './crewMember.module.css'
import Image from "next/image";
import Link from "next/link";

export default function CrewMemberCard({ crewMember }: { crewMember: CrewMemberDocument }) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.top}>
                    <div className={styles.imgContainer}>
                        <Image src={`${crewMember.avatar}`} alt='Best photo trip' fill className={styles.img}></Image>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.rank}>{crewMember.rank}</p>
                    <h1 className={styles.crewMemberName}>{crewMember.name}</h1>
                    <p className={styles.experience}><span>Experience: </span>{crewMember.experienceYears} years</p>
                </div>
                <Link href={`/crew-members/${crewMember._id}`}>DETAILS</Link>

            </div>
        </div>
    )
}
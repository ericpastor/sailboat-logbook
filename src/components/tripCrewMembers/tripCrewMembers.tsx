import Image from 'next/image'
import styles from './tripCrewMembers.module.css'
import { getAllCrewMembers } from '@/lib/data'
import { CrewMemberDocument } from '@/types/crewMember'


export default async function TripCrewMembers() {

    const tripCrewMembers = await getAllCrewMembers()
    return (
        <div className={styles.container}>
            {tripCrewMembers.map((crewMember: CrewMemberDocument) => (
                <div className={styles.person} key={crewMember.id}>
                    <div className={styles.avatarContainer}>
                        <Image className={styles.avatar} src={crewMember.avatar} alt="Officer sailing to Menorca" width={50} height={40} />
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.rank}>{crewMember.rank}</span>
                        <span className={styles.name}>{crewMember.name}</span>
                    </div>
                </div>
            ))}

        </div>
    )
}
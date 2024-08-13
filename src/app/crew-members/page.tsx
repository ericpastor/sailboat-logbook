import { CrewMemberDocument } from "@/types/crewMember";
import styles from './crewMembers.module.css'
import { Metadata } from "next";
import CrewMemberCard from "@/components/crewMemberCard/crewMemberCard";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
    title: "Crew Members",
    description: "All Crew members",
};

const getData = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/crew-members`)
    if (!res.ok) {
        throw new Error("something went wrong")
    }
    return res.json()
}


export default async function CrewMembers() {
    const crewMembers = await getData()
    return (
        <div>
            {/* <AddCrewMember /> */}
            <div className={styles.container}>
                {crewMembers.map((crewMember: CrewMemberDocument) => (
                    <div className={styles.crewMember} key={crewMember.id}>
                        <CrewMemberCard crewMember={crewMember} />
                    </div>
                ))}
            </div>
        </div>
    )
}
'use client'

import { CrewMemberDocument } from '@/types/crewMember'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { useEffect, useState } from 'react'


export default function SingleCrewMember({ params }: { params: Params }) {
    const [crewMember, setCrewMember] = useState<CrewMemberDocument>();

    const id = params.id
    console.log(params.id)

    const getData = async () => {
        const res = await fetch(`/api/crew-members/${id}`)
        const data = await res.json();
        setCrewMember(data);
        if (!res.ok) {
            throw new Error("Something went wrong!")
        }
    }
    useEffect(() => {
        getData()
    }, [id]);

    if (!crewMember) return <div>Loading...{params.id}</div>;

    return (
        <div>
            <h1>{crewMember.name}</h1>
            <p>Rank: {crewMember.rank}</p>
            <p>Experience: {crewMember.experienceYears}</p>
        </div>
    )
}
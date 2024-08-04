import Image from "next/image";

export default function SailboatData() {
    return (
        <>
            <div>
                <h1>Sailboat Specifications</h1>
                <p>Length Overall:</p>
                <p>Length at Waterline:</p>
                <p>Beam:</p>
                <p>Draft:</p>
                <p>Mast Height (Main):</p>
                <p>Mast Height (Mizzen):</p>
                {/* Render other specifications */}
            </div>
            <div>
                <h1>Sailboat name and data</h1>
                {/* <div className={styles.imgContainer}> */}
                <Image src="/sailboat.png" alt="sailboat" width={500} height={500} />
            </div>
        </>
    )
}

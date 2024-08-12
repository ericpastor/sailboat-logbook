'use client'

import { montserrat } from '@/app/fonts';
import Modal from '../modal/Modal';
import styles from './addTrip.module.css'

import { useState } from 'react';

export default function AddTrip() {
    const [isModalOpenAddTrip, setModalOpenAddTripModal] = useState(false);

    const handleOpenAddTripModal = () => {
        setModalOpenAddTripModal(true);
    };

    const handleCloseModalAddTrip = () => {
        setModalOpenAddTripModal(false);
    };
    return (
        <div className={styles.container}>
            <button data-test={"contact-btn"} className={styles.button} onClick={handleOpenAddTripModal}>New Trip</button>
            <div className={montserrat.variable}>
                <div className={styles.content}>
                    <Modal data-test={"contact-us"} isOpen={isModalOpenAddTrip} onClose={handleCloseModalAddTrip}>
                        <h2>New Trip</h2>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
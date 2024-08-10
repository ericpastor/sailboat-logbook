"use client"

import Image from 'next/image'
import styles from './home.module.css'
import { italianno, montserrat } from './fonts'
import Modal from '@/components/modal/Modal'
import { useState } from 'react';

export default function Home() {
  const [isModalOpenLearn, setModalOpenLearn] = useState(false);
  const [isModalOpenContact, setModalOpenContact] = useState(false);

  const handleOpenLearnModal = () => {
    setModalOpenLearn(true);
  };

  const handleCloseModalLearn = () => {
    setModalOpenLearn(false);
  };

  const handleOpenContactModal = () => {
    setModalOpenContact(true);
  };

  const handleCloseModalContact = () => {
    setModalOpenContact(false);
  };
  return (
    <div data-test={"home-page"} className={styles.container}>
      <div className={styles.textContainer}>
        <div className={montserrat.variable}>
          <h1 data-test="home-title" className={styles.title}>Keep your voyage details safe with the Captain&apos;s Logbook</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quo placeat omnis obcaecati iusto amet nisi, quae sit molestias dolorum expedita nihil impedit alias magnam repellat dolor quam? Quasi, sequi.</p>
        </div>
        <div className={styles.buttons}>
          <button data-test={"learn-btn"} className={styles.button} onClick={handleOpenLearnModal}>Learn more</button>
          <div className={montserrat.variable}>
            <div className={styles.content}>
              <Modal data-test={"learn-more"} isOpen={isModalOpenLearn} onClose={handleCloseModalLearn}>
                <h2>Captain&apos;s Logbook</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio libero architecto sequi dolore placeat nisi quam saepe, soluta sed. Earum sunt aliquid repudiandae esse tempore inventore iure tempora. Quidem, neque?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti rerum asperiores, voluptates nobis ex, dolores nulla, quia amet quas recusandae dolore eveniet molestiae repellat quaerat unde ipsa magni natus.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error fugiat sequi tenetur asperiores ipsa veniam, temporibus ut molestiae adipisci? Porro iusto fugiat dignissimos natus nulla unde laboriosam cum consequuntur reprehenderit.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio libero architecto sequi dolore placeat nisi quam saepe, soluta sed. Earum sunt aliquid repudiandae esse tempore inventore iure tempora. Quidem, neque?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti rerum asperiores, voluptates nobis ex, dolores nulla, quia amet quas recusandae dolore eveniet molestiae repellat quaerat unde ipsa magni natus.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error fugiat sequi tenetur asperiores ipsa veniam, temporibus ut molestiae adipisci? Porro iusto fugiat dignissimos natus nulla unde laboriosam cum consequuntur reprehenderit.</p>
              </Modal>
            </div>
          </div>
          <button data-test={"contact-btn"} className={styles.button} onClick={handleOpenContactModal}>Contact</button>
          <div className={montserrat.variable}>
            <div className={styles.content}>
              <Modal data-test={"contact-us"} isOpen={isModalOpenContact} onClose={handleCloseModalContact}>
                <h2>Contact Us</h2>
                <p>Some street in Finland</p>
                <p>00000  Helsinki.</p>
                <p>+358 00 000 00 00.</p>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/home-sailboat.png" alt="Sailing boat" width={400} height={400}></Image>
      </div>
    </div>
  )
}

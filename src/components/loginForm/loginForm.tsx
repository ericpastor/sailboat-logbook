'use client'

import { montserrat } from '@/app/fonts'
import styles from './loginForm.module.css'
import Link from 'next/link'


export default function LoginForm() {
    return (
        <div className={montserrat.variable}>
            <section className={styles.container}>
                <form className={styles.form}>
                    <h2 className={styles.title}>Login</h2>
                    <label>Email</label>
                    <input type="text" name='name' />
                    <label>Password</label>
                    <input type="text" name='name' />
                    <button className={styles.btn}>Login</button>

                    <p>Not a crew member?<Link href="/register"><span>Register</span></Link></p>


                </form>
            </section>
        </div>
    )
}
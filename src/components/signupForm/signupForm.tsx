import { montserrat } from '@/app/fonts'
import styles from './signupForm.module.css'
import Link from 'next/link'


export default function SignupForm() {
    return (
        <div className={montserrat.variable}>
            <section className={styles.container}>
                <form className={styles.form}>
                    <h2 className={styles.title}>Register</h2>
                    <label>Name</label>
                    <input type="text" name='name' />
                    <label>Email</label>
                    <input type="text" name='name' />
                    <label>Password</label>
                    <input type="text" name='name' />
                    <button className={styles.btn}>Sign Up</button>

                    <p>Already a crew member?<Link href="/login"><span>Login</span></Link></p>


                </form>
            </section>
        </div>
    )
}
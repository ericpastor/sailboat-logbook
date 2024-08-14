'use client'

import { montserrat } from '@/app/fonts'
import styles from './signupForm.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { userRegisterSchema } from '@/lib/validationModels'
import { useRouter } from 'next/navigation'

export default function SignupForm() {
    const [errors, setErrors] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter()

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const formData = {
            name: event.target.name.value,
            surname: event.target.surname.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            password: event.target.password.value,
            avatar: event.target.avatar.value,
            rank: event.target.rank.value,
        }

        const data = await fetch(`/api/register`, {
            method: 'POST',
            body: JSON.stringify(formData)
        }).then(res => res.json())

        try {

            const response = userRegisterSchema.safeParse(formData)

            if (!response.success) {
                let errArr: any[] = [];
                const { errors: err } = response.error;
                for (let i = 0; i < err.length; i++) {
                    errArr.push({ for: err[i].path[0], message: err[i].message });
                }
                setErrors(errArr);
                throw err;
            }
            router.push('/login')
            setErrors([]);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }


    }
    return (
        <div className={montserrat.variable}>
            <section className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h2 className={styles.title}>Register</h2>
                    <label>Name</label>
                    <input type="text" name='name' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "name")?.message.replaceAll('String', 'Name')}
                    </div>

                    <label>Surname</label>
                    <input type="text" name='surname' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "surname")?.message.replaceAll('String', 'Surname')}
                    </div>

                    <label>Email</label>
                    <input type="text" name='email' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "email")?.message}
                    </div>

                    <label>Phone</label>
                    <input type="text" name='phone' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "phone")?.message.replaceAll('String', 'Phone')}
                    </div>


                    <label>Password</label>
                    <input type="text" name='password' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "password")?.message.replaceAll('String', 'Password')}
                    </div>

                    <label>Avatar</label>
                    <input type="text" name='avatar' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "avatar")?.message.replaceAll('String', 'Avatar')}
                    </div>

                    <label>Rank</label>
                    <input type="text" name='rank' />
                    <div className={styles.errors}>
                        {errors.find((error) => error.for === "rank")?.message.replaceAll('enum', 'rank')}
                    </div>
                    <button disabled={isLoading} type='submit' className={styles.btn}>{isLoading ? "Saving..." : "Register"}</button>

                    <p>Already a crew member?<Link href="/login"><span>Login</span></Link></p>
                </form>
            </section>
        </div>
    )
}
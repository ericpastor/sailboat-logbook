'use client'

import { montserrat } from '@/app/fonts'
import styles from './loginForm.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { userLoginSchema } from '@/lib/validationModels';
import { signIn } from 'next-auth/react';


export default function LoginForm() {
    const [state, setState] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter()

    const handleChange = (event: any) => {
        setErrors('')
        setState({ ...state, [event.target.name]: event.target.value })
    }


    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const { email, password } = state


        try {

            setIsLoading(true)

            const res = await signIn('credentials', {
                email, password, redirect: false
            })

            if (res?.error) {
                setErrors('Invalid Credentials')
                setIsLoading(false)
                return
            }

            router.push('/trips')

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
                    <h2 className={styles.title}>Login</h2>

                    <label>Email</label>
                    <input onChange={handleChange} type="text" name='email' />


                    <label>Password</label>
                    <input onChange={handleChange} type="text" name='password' />
                    {errors && <div className={styles.errors}>{errors}</div>}

                    <button disabled={isLoading} type='submit' className={styles.btn}>{isLoading ? "Working on it..." : "Login"}</button>

                    <p>Not a crew member?<Link href="/register"><span>Register</span></Link></p>


                </form>
            </section>
        </div>
    )
}
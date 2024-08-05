import Image from 'next/image'
import styles from './modal.module.css'

export default function Modal(
    {
        isOpen,
        onClose,
        children
    }: {
        isOpen: boolean,
        onClose: () => void,
        children: React.ReactNode

    }
) {

    if (!isOpen) return null

    return (
        <>
            <div className={styles.backdrop} onClick={onClose}>
                <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                    <button data-test={"close-btn"} className={styles.close} onClick={onClose}>
                        <Image src="/close.png" alt='Cross' width={20} height={20}></Image>
                    </button>
                    {children}
                </div>
            </div>
        </>
    )
}
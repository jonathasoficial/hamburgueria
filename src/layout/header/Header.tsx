import hamb1 from "../../assets/image/hamb-1.png"
import styles from "../header/header.module.css"

export const Header = () => {
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.headerContainer}>
                <img src={hamb1} alt="Logo Dev Burguer" className={styles.logo} />
                <h1 className={styles.title}>
                    Dev Burguer
                </h1>
                <span className={styles.address}>
                    Rua dev 10, Campo Grande - MS
                </span>
                <div className={styles.hoursBox}>
                    <span className={styles.hours}>
                        Seg á Dom - 18:00 as 23:00
                    </span>
                </div>
            </div>
        </header>
    )
}
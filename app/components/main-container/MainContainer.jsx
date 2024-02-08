// styles
import styles from './mainContainer.module.scss'

export default function MainContainer({ children }) {
    return (
        <div className={styles.mainContainer}>
            {children}
        </div>
    )
}

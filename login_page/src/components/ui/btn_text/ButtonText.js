import { Link } from 'react-router-dom'
import styles from './button_text.module.scss'

function ButtonText({ children }) {
    return <>
        <Link to={'/home'} className={styles.ButtonText}>{children}</Link>
    </>
}

export default ButtonText
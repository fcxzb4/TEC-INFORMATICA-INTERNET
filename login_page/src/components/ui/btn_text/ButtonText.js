import styles from './button_text.module.scss'

function ButtonText({ children }) {
    return <>
        <button className={styles.ButtonText}>{children}</button>
    </>
}

export default ButtonText
import styles from './button_text.module.scss'

function ButtonText({ text }) {
    return <>
        <button className={styles.ButtonText}>{text}</button>
    </>
}

export default ButtonText
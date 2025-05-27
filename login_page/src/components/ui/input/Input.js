import styles from './input.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input({ name, type = "text", leftIcon, rightIcon }) {
  return (
    <div className={styles.inputWrapper}>
      {leftIcon && (
        <FontAwesomeIcon icon={leftIcon} className={styles.iconLeft} />
      )}
      <input
        type={type}
        name={name}
        className={styles.input}
        autoComplete="off"
      />
      {rightIcon && (
        <FontAwesomeIcon icon={rightIcon} className={styles.iconRight} />
      )}
    </div>
  );
}

export default Input;

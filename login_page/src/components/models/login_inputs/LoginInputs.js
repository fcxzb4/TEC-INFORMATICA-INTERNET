import styles from './login_inputs.module.scss'
import Input from './../../ui/input/Input';
import { faEnvelope, faEye, faKey } from '@fortawesome/free-solid-svg-icons';
import ButtonText from './../../ui/btn_text/ButtonText';
import TextNavigation from './../../ui/text_navigation/TextNavigation';

function LoginInputs() {
    return <>
        <div className={styles.Inputs}>
            <Input
                name="Email"
                type='email'
                icon={faEnvelope}
            />
            <Input
                name="Password"
                type='password'
                icon={faKey}
            />
            <TextNavigation text={"Esqueceu sua senha?"}/>
        </div>
    </>
}

export default LoginInputs;
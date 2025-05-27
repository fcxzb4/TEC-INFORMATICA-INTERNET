import LoginBtns from '../../components/models/login_btns/LoginBtns';
import LoginInputs from '../../components/models/login_inputs/LoginInputs';
import TextNavigation from '../../components/ui/text_navigation/TextNavigation';

import styles from './login_page.module.scss'

function LoginPage() {
    return <>
        <div className={styles.LoginPage}>
            <div className={styles.Blur}></div>
            <div className={styles.Title}>
                <h1>LOGIN</h1>
                <p>Reserve sua viagem dos sonhos hoje!</p>
            </div>
            <div>
                <LoginInputs />
                <LoginBtns />
            </div>
            <div className={styles.NavigationCreateAcount}>
                <h6>Não tem uma conta?&nbsp;</h6>
                <TextNavigation text={"Clique aqui!"} />
            </div>
        </div>
    </>
}

export default LoginPage;
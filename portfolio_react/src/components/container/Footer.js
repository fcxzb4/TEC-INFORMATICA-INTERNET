import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { ButtonIcon } from "./../ui/buttons/_export";

function Footer() {
    return <>
        <footer>
            <ButtonIcon iconFa={faGithub}/>
            <ButtonIcon iconFa={faInstagram}/>
            <ButtonIcon iconFa={faLinkedinIn}/>
        </footer>
    </>
}

export default Footer;
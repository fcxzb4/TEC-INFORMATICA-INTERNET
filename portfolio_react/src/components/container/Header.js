import { Logo } from './../ui/imgs/_export'
import { Profession } from './../ui/texts/_export'
import { ButtonTextIcon } from './../ui/buttons/_export';
import { faGraduationCap, faHouse, faFolder } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return <>
        <header id="header">
            <div id="logo_profession">
                <Logo />
                <Profession />
            </div>
            <div id="btns_header">
                <ButtonTextIcon text="HOME" iconFa={faHouse} />
                <ButtonTextIcon text="PROJETOS" iconFa={faFolder}/>
                <ButtonTextIcon text="FORMAÇÃO" iconFa={faGraduationCap} />
            </div>
        </header>
    </>
}

export default Header;
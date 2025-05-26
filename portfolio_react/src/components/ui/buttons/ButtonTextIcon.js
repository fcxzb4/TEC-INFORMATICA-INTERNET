import { faCircle, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ButtonTextIcon({ text, iconFa}) {
    return <>
        <button className="btn_header">
            <div className="animation">
                <FontAwesomeIcon icon={iconFa} size='2x' />
                <h1>{text}</h1>
            </div>
        </button>
    </>
}

export default ButtonTextIcon;
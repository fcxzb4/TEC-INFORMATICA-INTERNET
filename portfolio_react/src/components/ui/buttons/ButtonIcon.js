import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonIcon({iconFa}) {
    return <>
        <button className="btn_footer">
            <span className="svg_container">
                <FontAwesomeIcon icon={iconFa}/>
            </span>
            <span className="bg_btn_footer">
            </span>
        </button>
    </>
}

export default ButtonIcon;
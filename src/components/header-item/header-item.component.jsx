import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header-item.style.scss";

const HeaderItem = ({ icon, title, active }) => {
	return (
		<div className={`header-list-item ${active ? "active" : ""}`}>
			<FontAwesomeIcon icon={icon} />
			<span>{title}</span>
		</div>
	);
};

export default HeaderItem;

import HeaderItem from "../header-item/header-item.component";

import "./header.style.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import {
	faBed,
	faCar,
	faPlane,
	faTaxi
} from "@fortawesome/free-solid-svg-icons";
import HeaderSearch from "../header-search/header-search.component";

const Header = ({ type }) => {
	return (
		<div className="header">
			<div
				className={
					type === "list" ? "header-container list-mode" : "header-container"
				}
			>
				<div className="header-list">
					<HeaderItem icon={faBed} title="Stay" active />
					<HeaderItem icon={faPlane} title="Flights" />
					<HeaderItem icon={faCar} title="Car Rentals" />
					<HeaderItem icon={faBed} title="Attraction" />
					<HeaderItem icon={faTaxi} title="Airport taxis" />
				</div>
				{type !== "list" && (
					<>
						<h1 className="header-title">
							A lifetiem of discount? It's Genius.
						</h1>
						<p className="header-desc">
							Get rewardeaad for your travels - unclock instant savings of 10%
							or more with a free BookingApp account
						</p>
						<button className="header-btn">Sign in / Register</button>
						<HeaderSearch />
					</>
				)}
			</div>
		</div>
	);
};

export default Header;

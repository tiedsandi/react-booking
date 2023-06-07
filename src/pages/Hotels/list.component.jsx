import "./list.style.scss";
import { format } from "date-fns";

import Navbar from "../../components/Navbar/navbar.component";
import Header from "../../components/Header/header.component";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import RangeDate from "../../components/RangeDate/range-date.component";
import SearchItem from "../../components/SearchItem/search-item.component";

const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [options, setOptions] = useState(location.state.options);
	/* @audit-info buat useContext? */ const [openDate, setOpenDate] =
		useState(false);

	// @audit-info masih berantakan

	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="list-container">
				<div className="list-wrapper">
					<div className="list-search">
						<h1 className="ls-title">Search</h1>
						<div className="ls-item">
							<label>Destination</label>
							<input type="text" placeholder={destination} />
						</div>
						<div className="ls-item">
							<label>Check-in Date</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								date[0].startDate,
								"MM/dd/yyyy"
							)} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
							{openDate && <RangeDate date={date} setDate={setDate} />}
						</div>

						<div className="ls-item">
							<label>Options</label>
							<div className="ls-options">
								<div className="ls-option-item">
									<span className="ls-option-text">
										Min price <small>per night</small>
									</span>
									<input type="number" className="ls-option-input" />
								</div>
								<div className="ls-option-item">
									<span className="ls-option-text">
										Max price <small>per night</small>
									</span>
									<input type="number" className="ls-option-input" />
								</div>
								<div className="ls-option-item">
									<span className="ls-option-text">Adult</span>
									<input
										type="number"
										min={1}
										className="ls-option-input"
										placeholder={options.adult}
									/>
								</div>
								<div className="ls-option-item">
									<span className="ls-option-text">Children</span>
									<input
										type="number"
										min={0}
										className="ls-option-input"
										placeholder={options.children}
									/>
								</div>
								<div className="ls-option-item">
									<span className="ls-option-text">Room</span>
									<input
										type="number"
										min={1}
										className="ls-option-input"
										placeholder={options.room}
									/>
								</div>
							</div>
						</div>
						<button>Search</button>
					</div>
					<div className="list-result">
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;

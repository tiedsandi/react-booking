import { useState } from 'react';
import { format } from 'date-fns';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './header-sarch.style.scss';

import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import Option from '../option/option.component';
import RangeDate from '../range-date/range-date.component';

const HeaderSearch = () => {
	const [ openDate, setOpenDate ] = useState(false);

	const [ date, setDate ] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection'
		}
	]);

	const [ openOptions, setOpenOptions ] = useState(false);

	const [ options, setOptions ] = useState({
		adult: 1,
		children: 0,
		room: 1
	});

	return (
		<div className='header-search'>
			<div className='header-search-item'>
				<FontAwesomeIcon icon={faBed} className='header-icon' />
				<input type='text' placeholder='Where are you going?' className='header-search-input' />
			</div>
			<div className='header-search-item'>
				<FontAwesomeIcon icon={faCalendarDays} className='header-icon' />
				<span onClick={() => setOpenDate(!openDate)} className='header-search-text'>{`${format(
					date[0].startDate,
					'MM/dd/yyyy'
				)} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
				{openDate && <RangeDate date={date} setDate={setDate} />}
			</div>
			<div className='header-search-item'>
				<FontAwesomeIcon icon={faPerson} className='header-icon' />
				<span
					onClick={() => setOpenOptions(!openOptions)}
					className='header-search-text'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
				{openOptions && <Option options={options} setOptions={setOptions} />}
			</div>
			<div className='header-search-item'>
				<button className='header-btn'>Search</button>
			</div>
		</div>
	);
};

export default HeaderSearch;

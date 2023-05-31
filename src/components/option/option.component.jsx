import { useState } from 'react';

const Option = ({ options, setOptions }) => {
	const handleOption = (name, opertaion) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]: opertaion === 'i' ? options[name] + 1 : options[name] - 1
			};
		});
	};
	return (
		<div className='options'>
			<div className='option-item'>
				<span className='option-text'>Adult</span>
				<div className='option-counter'>
					<button
						disabled={options.adult <= 1}
						className='option-counter-button'
						onClick={() => handleOption('adult', 'd')}>
						-
					</button>
					<span className='option-counter-number'>{options.adult}</span>
					<button className='option-counter-button' onClick={() => handleOption('adult', 'i')}>
						+
					</button>
				</div>
			</div>
			<div className='option-item'>
				<span className='option-text'>Children</span>
				<div className='option-counter'>
					<button
						disabled={options.children < 1}
						className='option-counter-button'
						onClick={() => handleOption('children', 'd')}>
						-
					</button>
					<span className='option-counter-number'>{options.children}</span>
					<button className='option-counter-button' onClick={() => handleOption('children', 'i')}>
						+
					</button>
				</div>
			</div>
			<div className='option-item'>
				<span className='option-text'>Room</span>
				<div className='option-counter'>
					<button
						disabled={options.room <= 1}
						className='option-counter-button'
						onClick={() => handleOption('room', 'd')}>
						-
					</button>
					<span className='option-counter-number'>{options.room}</span>
					<button className='option-counter-button' onClick={() => handleOption('room', 'i')}>
						+
					</button>
				</div>
			</div>
		</div>
	);
};

export default Option;

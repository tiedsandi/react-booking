import React from "react";

const OptionItem = ({ optionName, options, setOptions }) => {
	const handleOption = (name, opertaion) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]: opertaion === "i" ? options[name] + 1 : options[name] - 1
			};
		});
	};

	return (
		<div className="option-item">
			<span className="option-text">{optionName}</span>
			<div className="option-counter">
				<button
					disabled={options[optionName] <= 1}
					className="option-counter-button"
					onClick={() => handleOption(optionName, "d")}
				>
					-
				</button>
				<span className="option-counter-number">{options[optionName]}</span>
				<button
					className="option-counter-button"
					onClick={() => handleOption(optionName, "i")}
				>
					+
				</button>
			</div>
		</div>
	);
};

export default OptionItem;

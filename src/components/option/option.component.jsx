import OptionItem from "../OptionItem/OptionItem.component";
const Option = ({ options, setOptions }) => {
	return (
		<div className="options">
			<OptionItem
				optionName="adult"
				options={options}
				setOptions={setOptions}
			/>
			<OptionItem
				optionName="children"
				options={options}
				setOptions={setOptions}
			/>
			<OptionItem optionName="room" options={options} setOptions={setOptions} />
		</div>
	);
};

export default Option;

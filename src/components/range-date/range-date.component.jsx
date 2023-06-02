import { DateRange } from "react-date-range";

const RangeDate = ({ date, setDate }) => {
	return (
		<DateRange
			editableDateInputs={true}
			onChange={(item) => setDate([item.selection])}
			moveRangeOnFirstSelection={false}
			ranges={date}
			className="date"
		/>
	);
};

export default RangeDate;

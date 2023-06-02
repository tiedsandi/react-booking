import "./property-list-item.style.scss";

const PropertyListItem = ({ data }) => {
	const { src, h1, h2 } = data;
	console.log(data);
	return (
		<div className="p-list-item">
			<img src={src} alt="unsplash-img" className="p-list-img" />
			<div className="p-list-titles">
				<h1>{h1}</h1>
				<h2>{h2}</h2>
			</div>
		</div>
	);
};

export default PropertyListItem;

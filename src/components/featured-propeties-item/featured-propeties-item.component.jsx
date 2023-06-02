import "./featured-propeties-item.style.scss";

const FeaturedPropertiesItem = ({ data }) => {
	const {
		img,
		name,
		city,
		price,
		rating: { value, predicate }
	} = data;
	return (
		<div className="fp-item">
			<img src={img} alt="unsplash-img" className="fp-img" />
			<span className="fp-name">{name}</span>
			<span className="fp-city">{city}</span>
			<span className="fp-price">Starting from ${price}</span>
			<div className="fp-rating">
				<button>{value}</button>
				<span>{predicate}</span>
			</div>
		</div>
	);
};

export default FeaturedPropertiesItem;

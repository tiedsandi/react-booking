import "./featured-item.style.scss";

const FeaturedItem = ({ data }) => {
	const { img, title, subtitle } = data;
	return (
		<div className="featured-item">
			<img src={img} alt="unsplash-img" className="featured-img" />
			<div className="featured-titles">
				<h1>{title}</h1>
				<h2>{subtitle}</h2>
			</div>
		</div>
	);
};

export default FeaturedItem;

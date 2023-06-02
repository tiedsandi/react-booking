import FeaturedPropertiesItem from "../featured-propeties-item/featured-propeties-item.component";
import "./featured-properties.style.scss";
const datas = [
	{
		id: 1,
		img: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
		name: "Mavvar 20",
		city: "Depht",
		price: "30",
		rating: {
			value: 8.9,
			predicate: "Excellent"
		}
	},
	{
		id: 2,
		img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1",
		name: "Aopsitn",
		city: "Austin",
		price: "140",
		rating: {
			value: 9.3,
			predicate: "Execptional"
		}
	},
	{
		id: 3,
		img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1",
		name: "Kaslo",
		city: "Lisbon",
		price: "99",
		rating: {
			value: 8.8,
			predicate: "Excellent"
		}
	},
	{
		id: 4,
		img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1",
		name: "Hilton Garden Inn",
		city: "Berlin",
		price: "123",
		rating: {
			value: 8.9,
			predicate: "Excellent"
		}
	}
];

const FeaturedProperties = () => {
	return (
		<div className="fp">
			{datas.map((data) => (
				<FeaturedPropertiesItem data={data} key={data.id} />
			))}
		</div>
	);
};

export default FeaturedProperties;

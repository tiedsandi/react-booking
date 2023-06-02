import PropertyListItem from "../property-list-item/property-list-item.component";
import "./propertylist.style.scss";

const datas = [
	{
		id: 1,
		src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
		h1: "Hotels",
		h2: "202 Hotels"
	},
	{
		id: 2,
		src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
		h1: "Apartments",
		h2: "105 Apartments"
	},
	{
		id: 3,
		src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
		h1: "Resorts",
		h2: "09 Resorts"
	},
	{
		id: 4,
		src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
		h1: "Villas",
		h2: "2616 Villas"
	},
	{
		id: 5,
		src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
		h1: "Cabins",
		h2: "9 Cabins"
	}
];

const PropertyList = () => {
	return (
		<div className="p-list">
			{datas.map((data) => (
				<PropertyListItem data={data} key={data.id} />
			))}
		</div>
	);
};

export default PropertyList;

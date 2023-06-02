import FeaturedItem from "../featured-item/featured-item.component";
import "./featured.style.scss";

const datas = [
	{
		id: 1,
		img: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
		title: "Dublin",
		subtitle: "123 Properties"
	},
	{
		id: 2,
		img: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
		title: "Austin",
		subtitle: "456 Properties"
	},
	{
		id: 3,
		img: "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
		title: "Dyub",
		subtitle: "789 Properties"
	}
];

const Featured = () => {
	return (
		<div className="featured">
			{datas.map((data) => (
				<FeaturedItem data={data} key={data.id} />
			))}
		</div>
	);
};

export default Featured;

import "./home.style.scss";

import Navbar from "../../components/navbar/navbar.component";
import Header from "../../components/header/header.component";
import Featured from "../../components/featured/featured.component";
import PropertyList from "../../components/property-list/property-list.component";
import FeaturedProperties from "../../components/featured-properties/featured-properties.component";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="home-container">
				<Featured />
				<h1 className="home-title">Browse everything</h1>
				<PropertyList />
				<h1 className="home-title">Home guest love</h1>
				<FeaturedProperties />
			</div>
		</div>
	);
};

export default Home;

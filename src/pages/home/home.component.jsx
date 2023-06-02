import "./home.style.scss";

import Navbar from "../../components/navbar/navbar.component";
import Header from "../../components/header/header.component";
import Featured from "../../components/featured/featured.component";
import PropertyList from "../../components/property-list/property-list.component";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="home-container">
				<Featured />
				<h1 className="home-title">Browse everything</h1>
				<PropertyList />
			</div>
		</div>
	);
};

export default Home;

import "./home.style.scss";

import Navbar from "../../components/Navbar/navbar.component";
import Header from "../../components/Header/header.component";
import Featured from "../../components/Featured/featured.component";
import PropertyList from "../../components/PropertyList/property-list.component";
import FeaturedProperties from "../../components/FeaturedProperties/featured-properties.component";
import MailList from "../../components/MailList/mail-list.component";
import Footer from "../../components/Footer/footer.component";

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
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Home;

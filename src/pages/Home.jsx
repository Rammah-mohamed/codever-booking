import Header from "../components/Header";
import Insides from "../components/Insides";
import Navbar from "../components/Navbar";
import Properties from "../components/Properties";
import Type from "../components/Type";
import Message from "../components/Message";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<Properties />
			<Type />
			<Insides />
			<Message />
			<Footer />
		</div>
	);
};

export default Home;

import styled from "styled-components";
import Navbar from "../components/Navbar";
import List from "../components/List";
import Search from "../components/Search";
import { mobile, small } from "../responsive";

const Container = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
	padding: 20px 100px;
	${mobile({ flexDirection: "column", padding: "20px" })};
	${small({ padding: "20px 50px", flexDirection: "column" })}
`;

const Hotels = () => {
	return (
		<>
			<Navbar />
			<Container>
				<Search />
				<List />
			</Container>
		</>
	);
};

export default Hotels;

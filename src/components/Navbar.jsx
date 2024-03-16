import styled from "styled-components";
import { Bed, Flight, CarRental, LocalTaxi } from "@mui/icons-material";
import { mobile, small } from "../responsive";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
	width: 100%;
	padding: 20px 100px 0px;
	background-color: var(--main-color);
	display: flex;
	flex-direction: column;
	gap: 30px;
	${mobile({ padding: "10px 20px 0px", gap: "25px" })};
	${small({ padding: "20px 50px 0px" })}
`;

const NavBox = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Logo = styled.h1`
	font-size: 26px;
	color: white;
	cursor: pointer;
	${mobile({ fontSize: "22px" })}
`;

const BtnsBox = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	${mobile({ gap: "10px" })};
	${small({ gap: "12px" })}
`;

const Btn = styled.button`
	background-color: #fff;
	color: var(--main-color);
	border: none;
	padding: 10px;
	font-weight: bold;
	cursor: pointer;
	${mobile({ padding: "7px" })};
`;

const Status = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	margin-bottom: 50px;
	${mobile({ flexDirection: "column", gap: "15px", marginBottom: "35px" })};
	${small({ flexWrap: "wrap", gap: "15px", marginBottom: "35px" })}
`;

const StatusBtn = styled.button`
	display: flex;
	align-items: center;
	gap: 5px;
	background-color: var(--main-color);
	color: white;
	font-size: 17px;
	padding: 12px;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	${mobile({
		fontSize: "15px",
		padding: "10px",
		width: "100%",
		justifyContent: "center",
	})};
	${small({ flexBasis: "48%", fontSize: "18px" })}
`;

const Navbar = () => {
	let statusRef = useRef();
	let handleClick = (id) => {
		Array.from(statusRef.current.children).map((c) => (c.style.border = "none"));
		statusRef.current.children[id].style.border = "1px solid white";
	};
	return (
		<Container>
			<NavBox>
				<Link to={"/"} style={{ textDecoration: "none" }}>
					<Logo>Coderbooking</Logo>
				</Link>
				<BtnsBox>
					<Btn>Register</Btn>
					<Btn>Login</Btn>
				</BtnsBox>
			</NavBox>
			<Status ref={statusRef}>
				<StatusBtn style={{ border: "1px solid white" }} onClick={() => handleClick(0)}>
					<Bed />
					<span>Stays</span>
				</StatusBtn>
				<StatusBtn onClick={() => handleClick(1)}>
					<Flight />
					<span>Flight</span>
				</StatusBtn>
				<StatusBtn onClick={() => handleClick(2)}>
					<CarRental />
					<span>Car Rentals</span>
				</StatusBtn>
				<StatusBtn onClick={() => handleClick(3)}>
					<Bed />
					<span>Attractions</span>
				</StatusBtn>
				<StatusBtn onClick={() => handleClick(4)}>
					<LocalTaxi />
					<span>Airport Taxis</span>
				</StatusBtn>
			</Status>
		</Container>
	);
};

export default Navbar;

import { Bed, Person, CalendarMonth } from "@mui/icons-material";
import styled from "styled-components";
import { mobile, small } from "../responsive";

const Container = styled.div`
	width: 100%;
	padding: 0px 100px;
	display: flex;
	flex-direction: column;
	gap: 40px;
	background-color: var(--main-color);
	color: white;
	${mobile({ padding: "0px 20px", gap: "0px" })};
	${small({ padding: "0px 50px", gap: "30px" })}
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	${mobile({ gap: "20px" })}
`;

const Title = styled.h1`
	font-size: 45px;
	color: white;
	${mobile({ fontSize: "28px" })};
	${small({ fontSize: "30px" })}
`;

const Paragraph = styled.p`
	font-size: 20px;
	color: #b1b1b1;
	${mobile({ fontSize: "16px" })}
`;

const Signin = styled.button`
	width: fit-content;
	font-size: 17px;
	padding: 12px;
	background-color: #145abc;
	border: none;
	color: white;
	cursor: pointer;
	${mobile({ fontSize: "16px", padding: "10px" })}
`;

const SearchBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	padding: 10px 30px;
	width: 100%;
	height: 65px;
	background-color: white;
	border: 3px solid var(--second-color);
	transform: translateY(50%);
	${mobile({
		flexWrap: "wrap",
		gap: "20px",
		padding: "10px 15px",
		height: "max-content",
		borderWidth: "2px ",
	})};
	${small({ padding: "5px 20px", borderWidth: "2px ", gap: "5px" })}
`;

const InputBox = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	height: 100%;
	padding: 10px;
	color: #666;
	${mobile({ flexBasis: "100%", borderBottom: "1px solid var(--main-color)" })}
`;

const TextIn = styled.input`
	width: 100%;
	height: 100%;
	padding-left: 20px;
	border: none;
	outline: none;
	cursor: pointer;
	&::placeholder {
		${small({ paddingLeft: "0px" })}
	}
`;

const SearchBtn = styled.button`
	width: fit-content;
	font-size: 17px;
	padding: 12px;
	background-color: #145abc;
	border: none;
	color: white;
	cursor: pointer;
	${mobile({ width: "100%", fontSize: "14px", padding: "10px" })};
	${small({ fontSize: "16px" })}
`;

const Header = () => {
	return (
		<Container>
			<Info>
				<Title>A lifetime of discounts? It's Genius.</Title>
				<Paragraph>
					get rewarded for your travels - unlock instant savings of 10% and more with a free
					coderbooking account
				</Paragraph>
				<Signin>Signin / Register</Signin>
			</Info>
			<SearchBox>
				<InputBox>
					<Bed />
					<TextIn type='text' placeholder='Where are your location?' />
				</InputBox>
				<InputBox>
					<CalendarMonth />
					<TextIn type='text' placeholder='04/22/2023 - 09/10/2023' />
				</InputBox>
				<InputBox>
					<Person />
					<TextIn type='text' placeholder='1 adult - 0 children - 1 room?' />
				</InputBox>
				<SearchBtn>Search</SearchBtn>
			</SearchBox>
		</Container>
	);
};

export default Header;

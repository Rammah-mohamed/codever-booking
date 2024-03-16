import styled from "styled-components";
import astro from "../img/astronaut-space-black-background-artwork-hd-wallpaper-7866ed583040dc28909c514e8812149a.jpg";
import abstract from "../img/emerging-shadows-in-dark-abstract-qi-1920x1080.jpg";
import { mobile, small } from "../responsive";

const images = [
	{
		id: 1,
		img: astro,
	},
	{
		id: 2,
		img: abstract,
	},
];

const Container = styled.div`
	width: 100%;
	padding: 0 100px;
	margin-bottom: 50px;
	${mobile({ padding: "0px 20px", marginBottom: "40px" })};
	${small({ padding: "0px 50px", marginBottom: "30px" })}
`;

const Title = styled.h2`
	font-weight: 600;
	margin-bottom: 20px;
	${mobile({ marginBottom: "15px" })};
	${small({ marginBottom: "10px" })}
`;

const Wrapper = styled.div`
	width: 100%;
	height: 400px;
	display: flex;
	align-items: center;
	gap: 15px;
	${mobile({ flexDirection: "column", height: "unset", gap: "20px" })};
	${small({ height: "unset", flexWrap: "wrap", gap: "12px" })}
`;

const Item = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 15px;
	cursor: pointer;
	${mobile({ gap: "6px" })};
	${small({ flexBasis: "48%", gap: "8px" })}
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const City = styled.span`
	color: #888;
	${mobile({ fontSize: "14px" })}
`;

const Money = styled.h3`
	font-size: 18px;
	${mobile({ fontSize: "16px" })}
`;

const RateBox = styled.div`
	display: flex;
	align-items: center;
`;

const RateNum = styled.span`
	padding: 10px;
	background-color: var(--main-color);
	color: white;
	margin-right: 10px;
	${mobile({ padding: "8px", fontSize: "14px" })}
`;

const RateText = styled.span`
	color: #555;
	${mobile({ fontSize: "14px" })}
`;

const Insides = () => {
	return (
		<Container>
			<Title>Homes guests love</Title>
			<Wrapper>
				<Item>
					<Img src={images[0].img} />
					<h3>Aparthotel Stare miastro</h3>
					<City>Madrid</City>
					<Money>Starting from $120</Money>
					<RateBox>
						<RateNum>9.3</RateNum>
						<RateText>Excellent</RateText>
					</RateBox>
				</Item>
				<Item>
					<Img src={images[1].img} />
					<h3>Comfort Suites Airport</h3>
					<City>Austin</City>
					<Money>Starting from $140</Money>
					<RateBox>
						<RateNum>8.7</RateNum>
						<RateText>Exceptional</RateText>
					</RateBox>
				</Item>
				<Item>
					<Img src={images[0].img} />
					<h3>Four Seasons Hotel</h3>
					<City>Lisbon</City>
					<Money>Starting from $99</Money>
					<RateBox>
						<RateNum>8.8</RateNum>
						<RateText>Excellent</RateText>
					</RateBox>
				</Item>
				<Item>
					<Img src={images[1].img} />
					<h3>Hilton Garden Inn</h3>
					<City>Berlin</City>
					<Money>Starting from $105</Money>
					<RateBox>
						<RateNum>8.9</RateNum>
						<RateText>Excellent</RateText>
					</RateBox>
				</Item>
			</Wrapper>
		</Container>
	);
};

export default Insides;

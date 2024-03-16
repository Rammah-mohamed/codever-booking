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
	display: flex;
	align-items: center;
	gap: 15px;
	${mobile({ flexDirection: "column", gap: "10px" })};
	${small({ flexWrap: "wrap", gap: "10px" })}
`;

const Item = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 10px;
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	${mobile({ gap: "6px" })};
	${small({ flexBasis: "30%", gap: "6px" })}
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const ItemTitle = styled.h2`
	font-size: 24px;
	${mobile({ fontSize: "20px" })};
	${small({ fontSize: "20px" })}
`;

const Number = styled.span`
	color: #666;
	${mobile({ fontSize: "14px" })};
	${small({ fontSize: "14px" })}
`;

const Type = () => {
	return (
		<Container>
			<Title>Browse property type</Title>
			<Wrapper>
				<Item>
					<Img src={images[0].img}></Img>
					<ItemTitle>Hotels</ItemTitle>
					<Number>433 Hotels</Number>
				</Item>
				<Item>
					<Img src={images[1].img}></Img>
					<ItemTitle>Apartments</ItemTitle>
					<Number>230 Apartments</Number>
				</Item>
				<Item>
					<Img src={images[0].img}></Img>
					<ItemTitle>Resorts</ItemTitle>
					<Number>583 Resorts</Number>
				</Item>
				<Item>
					<Img src={images[1].img}></Img>
					<ItemTitle>Villas</ItemTitle>
					<Number>1758 Villas</Number>
				</Item>
				<Item>
					<Img src={images[0].img}></Img>
					<ItemTitle>Cabins</ItemTitle>
					<Number>2768 Cabins</Number>
				</Item>
				<Item>
					<Img src={images[1].img}></Img>
					<ItemTitle>Motels</ItemTitle>
					<Number>5068 Motels</Number>
				</Item>
			</Wrapper>
		</Container>
	);
};

export default Type;

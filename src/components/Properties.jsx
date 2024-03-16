import styled from "styled-components";
import astro from "../img/astronaut-space-black-background-artwork-hd-wallpaper-7866ed583040dc28909c514e8812149a.jpg";
import abstract from "../img/emerging-shadows-in-dark-abstract-qi-1920x1080.jpg";
import { mobile, small } from "../responsive";
import { Link } from "react-router-dom";

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
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 0px 100px;
	margin: 80px 0px 50px;
	width: 100%;
	${mobile({
		flexDirection: "column",
		padding: "0px 20px",
		gap: "10px",
		margin: "160px 0px 40px",
	})};
	${small({ padding: "0px 50px", gap: "10px", margin: "65px 0px 30px" })}
`;

const Item = styled.div`
	border-radius: 10px;
	overflow: hidden;
	position: relative;
	cursor: pointer;
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const TextBox = styled.div`
	position: absolute;
	left: 20px;
	bottom: 20px;
`;

const Text = styled.h2`
	font-size: 28px;
	font-weight: 600;
	color: white;
	margin-bottom: 5px;
	${mobile({ fontSize: "20px" })};
	${small({ fontSize: "18px" })}
`;

const Properties = () => {
	return (
		<Container>
			<Link to={"/hotels"} style={{ flex: "1" }}>
				<Item>
					<Img src={images[0].img} alt='' />
					<TextBox>
						<Text>Dublin</Text>
						<Text>233 Properties</Text>
					</TextBox>
				</Item>
			</Link>
			<Link to={"/hotels"} style={{ flex: "1" }}>
				<Item>
					<Img src={images[1].img} alt='' />
					<TextBox>
						<Text>Austan</Text>
						<Text>600 Properties</Text>
					</TextBox>
				</Item>
			</Link>
			<Link to={"/hotels"} style={{ flex: "1" }}>
				<Item>
					<Img src={images[0].img} alt='' />
					<TextBox>
						<Text>Texas</Text>
						<Text>450 Properties</Text>
					</TextBox>
				</Item>
			</Link>
		</Container>
	);
};

export default Properties;

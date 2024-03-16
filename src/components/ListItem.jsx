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

const Item = styled.div`
	height: 250px;
	display: flex;
	align-items: center;
	gap: 15px;
	${mobile({ height: "unset", flexDirection: "column", gap: "6px" })};
	${small({ gap: "10px" })}
`;

const ImgBox = styled.div`
	flex: 1;
	height: 100%;
	cursor: pointer;
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const InfoBox = styled.div`
	width: 100%;
	height: 100%;
	flex: 3;
	display: flex;
	align-items: center;
	gap: 15px;
	${mobile({ flexDirection: "column", alignItems: "unset", gap: "6px" })}
`;

const Left = styled.div`
	width: 100%;
	height: 100%;
	flex: 2;
	display: flex;
	flex-direction: column;
	gap: 15px;
	${mobile({ gap: "10px" })}
`;

const Title = styled.h2`
	color: var(--main-color);
	cursor: pointer;
	${mobile({ fontSize: "20px" })}
`;

const GreyText = styled.h4`
	color: #888;
	${mobile({ fontSize: "14px" })}
`;

const Taxi = styled.span`
	width: fit-content;
	background-color: #09a009;
	color: white;
	border-radius: 5px;
	padding: 5px;
	${mobile({ fontSize: "14px" })}
`;

const GreenText = styled.h4`
	color: #09a009;
	${mobile({ fontSize: "14px" })}
`;

const BlueText = styled.h4`
	color: #2366c4;
	${mobile({ fontSize: "14px" })}
`;

const Right = styled.div`
	height: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	${mobile({ flexDirection: "row", flexWrap: "wrap", gap: "6px" })}
`;

const RateBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ width: "100%", fontSize: "14px" })}
`;

const Rate = styled.span`
	padding: 10px;
	background-color: var(--main-color);
	color: white;
	margin-right: 10px;
	${mobile({ padding: "8px", fontSize: "14px" })}
`;

const RightFooter = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	${mobile({ width: "100%" })}
`;

const Price = styled.span`
	font-size: 35px;
	font-weight: 600;
	${mobile({ fontSize: "30px" })}
`;

const Btn = styled.button`
	font-size: 18px;
	padding: 12px;
	background-color: #145abc;
	border: none;
	border-radius: 10px;
	color: white;
	cursor: pointer;
	${mobile({ fontSize: "14px" })}
`;

export const ListItem = () => {
	return (
		<Item>
			<ImgBox>
				<Img src={images[0].img} alt='image' />
			</ImgBox>
			<InfoBox>
				<Left>
					<Title>Tower Street Apartment</Title>
					<GreyText>500m from center</GreyText>
					<Taxi>Free airport taxi</Taxi>
					<h4>Studio Apartment With Air Conditioning</h4>
					<GreyText>Entire Studio . 1bathroom 21m full bed</GreyText>
					<GreenText>Free Cancellation</GreenText>
					<BlueText>You can cancle later. so lock in this great price today</BlueText>
				</Left>
				<Right>
					<RateBox>
						<h3>Excellent</h3>
						<Rate>8.9</Rate>
					</RateBox>
					<RightFooter>
						<Price style={{ alignSelf: "flex-end" }}>$110</Price>
						<GreyText style={{ alignSelf: "flex-end" }}>include taxes and fees</GreyText>
						<Btn>See Availability</Btn>
					</RightFooter>
				</Right>
			</InfoBox>
		</Item>
	);
};

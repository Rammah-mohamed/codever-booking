import styled from "styled-components";
import Navbar from "../components/Navbar";
import Message from "../components/Message";
import {
	ArrowBackRounded,
	ArrowForwardRounded,
	CancelOutlined,
	LocationOn,
} from "@mui/icons-material";
import astro from "../img/astronaut-space-black-background-artwork-hd-wallpaper-7866ed583040dc28909c514e8812149a.jpg";
import abstract from "../img/emerging-shadows-in-dark-abstract-qi-1920x1080.jpg";
import { useState } from "react";
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
	{
		id: 3,
		img: astro,
	},
	{
		id: 4,
		img: abstract,
	},
	{
		id: 5,
		img: astro,
	},
	{
		id: 6,
		img: abstract,
	},
];

const Conatiner = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 100px;
	margin-bottom: 50px;
	gap: 25px;
	${mobile({ padding: "20px", marginBottom: "10px" })};
	${small({ padding: "20px 50px", marginBottom: "15px" })}
`;

const Top = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const TopTitle = styled.h1`
	${mobile({ fontSize: "22px" })};
	${small({ fontSize: "28px" })}
`;

const Head = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Btn = styled.button`
	font-size: 18px;
	padding: 12px;
	background-color: #145abc;
	border: none;
	border-radius: 10px;
	color: white;
	cursor: pointer;
	${mobile({ fontSize: "14px", padding: "10px" })}
`;

const AddressBox = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const GreyText = styled.span`
	color: #666;
	${mobile({ fontSize: "14px" })}
`;

const GreenText = styled.h3`
	color: #09a009;
	${mobile({ fontSize: "14px" })}
`;

const BlueText = styled.h3`
	color: #2366c4;
	${mobile({ fontSize: "14px" })}
`;

const ImgWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
	${mobile({ gap: "10px" })}
`;

const ImgBox = styled.div`
	flex: 1;
	flex-basis: 32.5%;
	cursor: pointer;
	${mobile({ flexBasis: "100%" })};
	${small({ flexBasis: "48%" })}
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const SliderImgBox = styled.div`
	width: 80%;
	height: 80vh;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	${small({ height: "60vh" })}
`;

const SliderImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Bottom = styled.div`
	display: flex;
	gap: 20px;
	${mobile({ flexDirection: "column" })};
	${small({ flexDirection: "column" })}
`;

const BottomLeft = styled.div`
	flex: 3;
	display: flex;
	flex-direction: column;
	gap: 25px;
	${mobile({ gap: "15px" })};
	${small({ gap: "18px" })}
`;
const BottomTitle = styled.h1`
	${mobile({ fontSize: "25px !important" })};
	${small({ fontSize: "30px !important" })}
`;

const BottomRight = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 30px;
	padding: 20px;
	background-color: #cee0f7;
	${mobile({ gap: "15px" })};
	${small({ gap: "20px" })}
`;

const Money = styled.span`
	${mobile({ fontSize: "24px !important" })};
	${small({ fontSize: "30px !important" })}
`;

const Nights = styled.span`
	font-size: 30px;
	font-weight: normal;
	letter-spacing: 1px;
	${mobile({ fontSize: "24px" })};
	${small({ fontSize: "28px" })}
`;

const Hotel = () => {
	let [open, setOpen] = useState(false);
	let [imgId, setImgId] = useState(null);

	const handleClick = (index) => {
		setOpen(window.innerWidth > 768 ? true : false);
		setImgId(index);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSlide = (direction, index) => {
		if (direction === "left" && index > 0) {
			setImgId((imgId -= 1));
		} else if (direction === "right" && index < images.length - 1) {
			setImgId((imgId += 1));
		}
	};

	return (
		<>
			{open && (
				<>
					<CancelOutlined
						style={{
							fontSize: "50px",
							backgroundColor: "rgb(172, 172, 172, 0.6)",
							borderRadius: "50%",
							position: "fixed",
							right: "20px",
							top: "20px",
							cursor: "pointer",
						}}
						onClick={handleClose}
					/>
					<ArrowBackRounded
						style={{
							fontSize: "50px",
							backgroundColor: "rgb(172, 172, 172, 0.6)",
							borderRadius: "50%",
							position: "fixed",
							left: "20px",
							top: "50%",
							transform: "translateY(-50%)",
							zIndex: "10",
							cursor: "pointer",
						}}
						onClick={() => handleSlide("left", imgId)}
					/>
					<SliderImgBox>
						<SliderImg src={images[imgId].img} />
					</SliderImgBox>
					<ArrowForwardRounded
						style={{
							fontSize: "50px",
							backgroundColor: "rgb(172, 172, 172, 0.6)",
							borderRadius: "50%",
							position: "fixed",
							right: "20px",
							top: "50%",
							transform: "translateY(-50%)",
							zIndex: "10",
							cursor: "pointer",
						}}
						onClick={() => handleSlide("right", imgId)}
					/>
				</>
			)}
			<Navbar />
			<Conatiner>
				<Top>
					<Head>
						<TopTitle>Tower Street Apartments</TopTitle>
						<Btn>Reserve or Book Now</Btn>
					</Head>
					<AddressBox>
						<LocationOn />
						<GreyText>Elton street 125 new york</GreyText>
					</AddressBox>
					<BlueText>Excellent Location - 500m from center</BlueText>
					<GreenText>Book a stay over $114 at this property and get a free airport taxi</GreenText>
				</Top>
				<ImgWrapper>
					{images.map((img, index) => (
						<ImgBox key={index}>
							<Img src={images[index].img} onClick={() => handleClick(index)} />
						</ImgBox>
					))}
				</ImgWrapper>
				<Bottom>
					<BottomLeft>
						<BottomTitle style={{ fontSize: "35px" }}>Stay in the heart of city</BottomTitle>
						<p style={{ fontSize: "17px", color: "#666" }}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio similique, eaque
							repellat quas nesciunt tempore ipsam aliquam porro aspernatur rem earum maiores
							quisquam, ea ullam beatae facere id assumenda totam Lorem ipsum dolor sit, amet
							consectetur adipisicing elit. Velit perspiciatis ad porro maxime voluptatum,
							reprehenderit magnam numquam aspernatur illo eum debitis, placeat neque aliquam totam
							architecto quidem omnis veniam dolorem? Lorem ipsum dolor, sit amet consectetur
							adipisicing elit. Eos minus quibusdam quidem a nam, accusamus deserunt ducimus aperiam
							ratione magnam, rem dolores cum molestias? Neque quos adipisci quas dolor illo?
						</p>
					</BottomLeft>
					<BottomRight>
						<h2 style={{ color: "#444" }}>Perfect for a 9-nights stay!</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur inventore
							consequatur dicta in voluptatibus commodi qui.
						</p>
						<Money style={{ fontSize: "35px", fontWeight: "bold" }}>
							$945 <Nights>(9-Nights)</Nights>
						</Money>
						<Btn>Reserve or book now!</Btn>
					</BottomRight>
				</Bottom>
			</Conatiner>
			<Message />
		</>
	);
};

export default Hotel;

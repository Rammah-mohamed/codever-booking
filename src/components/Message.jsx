import styled from "styled-components";
import { mobile, small } from "../responsive";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 25px;
	padding: 80px 0px;
	background-color: var(--main-color);
	color: white;
	${mobile({ gap: "20px", padding: "40px 20px" })};
	${small({ padding: "60px 50px" })}
`;

const Title = styled.h1`
	font-size: 40px;
	${mobile({ fontSize: "24px" })};
	${small({ fontSize: "32px" })}
`;

const Text = styled.p`
	font-size: 18px;
	color: #c5c5c5;
	${mobile({ fontSize: "14px" })}
`;

const MailBox = styled.div`
	width: 600px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
	${mobile({ width: "100%", height: "30px" })}
`;

const MailInput = styled.input`
	flex: 4;
	height: 100%;
	border: none;
	border-radius: 5px;
	outline: none;
	padding-left: 15px;
	font-size: 18px;
	font-weight: 500;
	cursor: pointer;
	&::placeholder {
		color: #999;
	}
	${mobile({ fontSize: "14px" })};
	${small({ fontSize: "16px" })}
`;

const Btn = styled.button`
	flex: 1;
	height: 100%;
	background-color: #145abc;
	color: white;
	border: none;
	border-radius: 5px;
	font-size: 18px;
	font-weight: 500;
	cursor: pointer;
	${mobile({ fontSize: "14px" })};
	${small({ fontSize: "16px" })}
`;

const Message = () => {
	return (
		<Container>
			<Title>Save time, Save money</Title>
			<Text>Sign up and we'll send the best deals to you</Text>
			<MailBox>
				<MailInput type='mail' placeholder='Your Email' />
				<Btn>Subscribe</Btn>
			</MailBox>
		</Container>
	);
};

export default Message;

import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 0px 100px 50px;
	margin-top: 50px;
	${mobile({ flexWrap: "wrap", padding: "0px 20px 30px", marginTop: "30px" })}
`;

const LinkBox = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 15px;
	${mobile({ gap: "16px", flexBasis: "50%", marginBottom: "20px" })}
`;

const Link = styled.span`
	color: var(--main-color);
	font-size: 18px;
	font-weight: 500;
	cursor: pointer;
	${mobile({ fontSize: "16px" })}
`;

const Footer = () => {
	return (
		<Container>
			<LinkBox>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
			</LinkBox>
			<LinkBox>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
			</LinkBox>
			<LinkBox>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
			</LinkBox>
			<LinkBox>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
			</LinkBox>
		</Container>
	);
};

export default Footer;

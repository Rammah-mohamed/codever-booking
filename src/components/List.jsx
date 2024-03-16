import styled from "styled-components";
import { mobile } from "../responsive";
import { ListItem } from "./ListItem";
import { Link } from "react-router-dom";

const Conatiner = styled.div`
	flex: 3;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	${mobile({ gap: "20px" })}
`;

const List = () => {
	return (
		<Conatiner>
			<Link to={"/hotels/test"} style={{ textDecoration: "none" }}>
				<ListItem />
			</Link>
			<Link to={"/hotels/test"} style={{ textDecoration: "none" }}>
				<ListItem />
			</Link>
			<Link to={"/hotels/test"} style={{ textDecoration: "none" }}>
				<ListItem />
			</Link>
			<Link to={"/hotels/test"} style={{ textDecoration: "none" }}>
				<ListItem />
			</Link>
			<Link to={"/hotels/test"} style={{ textDecoration: "none" }}>
				<ListItem />
			</Link>
			<Link to={"/hotels/test"} style={{ textDecoration: "none" }}>
				<ListItem />
			</Link>
			<Link to={"/hotels/test"} style={{ textDecoration: "none" }}>
				<ListItem />
			</Link>
			<Link to={"/hotels/test"} style={{ textDecoration: "none" }}>
				<ListItem />
			</Link>
			<Link to={"/hotels/test"} style={{ textDecoration: "none" }}>
				<ListItem />
			</Link>
			<Link to={"/hotels/test"} style={{ textDecoration: "none" }}>
				<ListItem />
			</Link>
			<Link to={"/hotels/test"} style={{ textDecoration: "none" }}>
				<ListItem />
			</Link>
		</Conatiner>
	);
};

export default List;

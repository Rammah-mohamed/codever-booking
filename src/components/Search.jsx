import styled from "styled-components";
import { mobile, small } from "../responsive";

const SearchBox = styled.div`
	position: sticky;
	top: 20px;
	padding: 15px;
	flex: 1;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 20px;
	background-color: var(--second-color);
	border-radius: 10px;
	${mobile({ position: "unset", gap: "12px", marginBottom: "30px" })};
	${small({ position: "unset", marginBottom: "30px" })}
`;

const Title = styled.h1`
	color: #555;
	${mobile({ fontSize: "24px" })}
`;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	${mobile({ gap: "15px" })}
`;

const TopBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	${mobile({ gap: "12px" })}
`;

const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const Label = styled.label`
	color: #843535;
	font-weight: 500;
	cursor: pointer;
	${mobile({ fontSize: "15px" })}
`;

const Input = styled.input`
	width: 100%;
	height: 40px;
	padding-left: 15px;
	border: none;
	outline: none;
	cursor: pointer;
	&:focus {
		outline: 2px solid #1d56a5;
	}
`;

const BottomBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const OpWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const OpTitle = styled.h3`
	color: #843535;
`;

const OpBox = styled.div`
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const OpText = styled.span`
	color: #a14646;
`;

const OpInput = styled.input`
	width: 60px;
	height: 100%;
	border: none;
	outline: none;
	padding-left: 10px;
	cursor: pointer;
	&:focus {
		outline: 2px solid #1d56a5;
	}
`;

const Btn = styled.button`
	font-size: 18px;
	padding: 12px;
	background-color: #145abc;
	border: none;
	border-radius: 10px;
	color: white;
	cursor: pointer;
	${mobile({ fontSize: "16px", padding: "10px" })}
`;

const Search = () => {
	return (
		<SearchBox>
			<Title>Search</Title>
			<InputWrapper>
				<TopBox>
					<InputBox>
						<Label htmlFor='destination'>Destination</Label>
						<Input type='text' placeholder='Enter Your Destibation' id='destination' />
					</InputBox>
					<InputBox>
						<Label htmlFor='date'>Check-in-date</Label>
						<Input type='text' placeholder='Enter The Date' id='date' />
					</InputBox>
				</TopBox>
				<BottomBox>
					<OpTitle>Options</OpTitle>
					<OpWrapper>
						<OpBox>
							<OpText>Min price per night</OpText>
							<OpInput type='number' min={1} />
						</OpBox>
						<OpBox>
							<OpText>Max price per night</OpText>
							<OpInput type='number' min={1} />
						</OpBox>
						<OpBox>
							<OpText>Adult</OpText>
							<OpInput type='number' min={1} />
						</OpBox>
						<OpBox>
							<OpText>Children</OpText>
							<OpInput type='number' min={0} />
						</OpBox>
						<OpBox>
							<OpText>Room</OpText>
							<OpInput type='number' min={1} />
						</OpBox>
					</OpWrapper>
				</BottomBox>
				<Btn>Search</Btn>
			</InputWrapper>
		</SearchBox>
	);
};

export default Search;

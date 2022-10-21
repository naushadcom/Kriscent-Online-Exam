import React from "react";
import {
	Box,
	Heading,
	Flex,
	VStack,
	Image,
	Text,
	Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<Flex
			style={{ justifyContent: "space-around" }}
			w="70%"
			m="auto"
			h="80px"
			pt="20px"
			bg="black"
			color="white"
		>
			<Link to="/admin">
				<Button color="black">Admin</Button>
			</Link>
			<Link to="/Signup">
				<Button color="black">User</Button>
			</Link>
		</Flex>
	);
};

export default Home;

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
		<>
		<Heading size="2xl" style={{marginBottom:"2%",marginTop:"5%"}}>KRISCENT ONLINE EXAM</Heading>
		<Image style={{height:"100px",margin:"auto",marginBottom:"2%"}} src="https://bluerang.s3.ap-south-1.amazonaws.com/1606373971013_k_round_circle.png" alt="" />
		<Flex
			style={{ justifyContent: "space-around" }}
			w="70%"
			m="auto"
			h="80px"
			pt="20px"
			bg="black"
			color="white"
		>
			<Link to="/login">
				<Button color="black">Admin</Button>
			</Link>
			<Link to="/Signup">
				<Button color="black">Student</Button>
			</Link>
		</Flex>

		<Heading size="xl" style={{marginTop:"3%"}}>Please Note</Heading>
		<hr />
		<Heading size="l">Admin have to directly Login with the given below credential.........</Heading>
		<Heading size="l">Email: <span style={{color:"red"}}>admin@gmail.com</span> </Heading>
		<Heading size="l">Password: <span style={{color:"red"}}>kriscent</span>  </Heading>
		<Heading size="l">Student have to signup with own their credential and then login with the same.......</Heading>
		
		</>
	);
};

export default Home;

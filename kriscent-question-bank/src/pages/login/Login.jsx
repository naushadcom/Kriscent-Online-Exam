import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  VStack,
  Image,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminLoggedIn } from "../admin/admin.action";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = JSON.parse(localStorage.getItem("userData"));
    console.log(email, password);
    if (email == "admin@gmail.com" && password == "kriscent") {
      dispatch(adminLoggedIn(email));
      toast({
        title: "admin logged in successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      navigate("/admin");
    } else if (email == userData.email && password == userData.password) {
      console.log(userData);

      toast({
        title: "user logged in successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      navigate("/user");
    } else {
      toast({
        title: "invalid credentials",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <Box>
      <Box
        w="30%"
        border={"1px solid black"}
        m="auto"
        mt="120px"
        p="30px"
        borderRadius="10px"
      >
        <h1
          style={{
            color: "Black",
            padding: "8px",
            borderRadius: "5px",
            fontSize: "25px",
            fontWeight: "bold",
            marginBottom: "4%",
          }}
        >
          Login
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormLabel>Email Address</FormLabel>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormLabel></FormLabel>
          <Input
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            type="submit"
          />
        </form>
      </Box>
	  <Box>
	  Not a member? <Link style={{marginTop:"50%",color:"blue"}} to="/signup">Sign Up Now</Link>
	  </Box>
    </Box>
  );
};

export default Login;

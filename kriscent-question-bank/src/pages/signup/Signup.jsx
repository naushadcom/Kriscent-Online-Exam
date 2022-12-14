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
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (password != rePassword) {
      toast({
        title: "password doesn't match",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    e.preventDefault();
    console.log(username, email, password, rePassword);
    const payload = {
      email,
      username,
      password,
    };

    localStorage.setItem("userData", JSON.stringify(payload));
    axios
      .post(`https://mock6naushaddeployed.herokuapp.com/user`, payload)
      .then((res) => console.log(res.data))
      .then(() => {
        toast({
          title: "signedup successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        navigate("/login");
      })
      .catch(() => {
        toast({
          title: "signedup failed",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });
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
        <h1 style={{
            color: "Black",
            padding: "8px",
            borderRadius: "5px",
            fontSize: "25px",
            fontWeight: "bold",
            marginBottom: "4%",
          }}
        >Signup</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormLabel>Username</FormLabel>
          <Input type="text" onChange={(e) => setUsername(e.target.value)} />
          <FormLabel>Email Address</FormLabel>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            onChange={(e) => setRePassword(e.target.value)}
          />
          <FormLabel></FormLabel>
          <Input style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
              fontSize: "20px",
              fontWeight: "bold",
            }} type="submit" />
        </form>
      </Box>
      <Box>
      Already have an account ? <Link style={{marginTop:"50%",color:"blue"}} to="/login">Login Here</Link>
	  </Box>
    </Box>
  );
};

export default Signup;

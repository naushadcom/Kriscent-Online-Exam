import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Flex,
  Stack,
  Image,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  useToast,
  Select,
  Radio,
  RadioGroup,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLoggedIn } from "../admin/admin.action";
import { useNavigate } from "react-router-dom";
import { getHotels } from "../admin/admin.action";
import BasicUsage from "../../components/Modal";
const Admin = () => {
  const { login, hotelData } = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imageUrl =
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  const [onlineData, setonlineData] = useState({
    image_url: imageUrl,
    booked: false,
  });
  const [obj, setObj] = useState({});
  const handleSubmit = (e) => {
    const array = [
      onlineData.option1,
      onlineData.option2,
      onlineData.option3,
      onlineData.option4,
    ];
    const incorrect = array.filter((ele) => ele != onlineData.correct);
    const payload = {
      question: onlineData.question,
      correctOption: onlineData.correct,
      incorrectOption: incorrect,
    };
    // console.log(payload);
    e.preventDefault();
    // console.log(onlineData);
    postData(payload);
  };
  // useEffect(() => {
  //   if (!login) {
  //     return navigate("/login");
  //   }
  // }, [login]);

  var { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    // console.log(e);
    const inputName = e.target.name;
    // console.log(inputName, e.target.value);

    setonlineData({
      ...onlineData,
      [inputName]: e.target.value,
    });
  };
  const deleteIt = (id) => {
    axios
      .delete(`https://mock6naushaddeployed.herokuapp.com/question/${id}`)
      .then((res) => dispatch(getHotels()))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    dispatch(getHotels());
  }, []);
  const postData = (payload) => {
    axios
      .post(`https://mock6naushaddeployed.herokuapp.com/question`, payload)
      .then((res) => dispatch(getHotels()))
      .catch((err) => console.log(err));
  };
  // console.log(hotelData);

  function handleEdit(ele) {
    setObj(ele);
    isOpen = true;
    onOpen();
  }
  return (
    <Box>
    <Box>
    <Heading>Upload Questions</Heading>
    <br />
    <hr />
    </Box>
      <Box
        w="30%"
        border={"1px solid black"}
        m="auto"
        mt="20px"
        mb="2%"
        p="30px"
        borderRadius="10px"
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormLabel>Question</FormLabel>
          <Input
            type={"text"}
            onChange={(e) => handleChange(e)}
            name="question"
          />
          <FormLabel>Option-1</FormLabel>
          <Input
            type={"text"}
            onChange={(e) => handleChange(e)}
            name="option1"
          />
          <FormLabel>Option-2</FormLabel>
          <Input
            type={"text"}
            onChange={(e) => handleChange(e)}
            name="option2"
          />
          <FormLabel>Option-3</FormLabel>
          <Input
            type={"text"}
            onChange={(e) => handleChange(e)}
            name="option3"
          />
          <FormLabel>Option-4</FormLabel>
          <Input
            type={"text"}
            onChange={(e) => handleChange(e)}
            name="option4"
          />
          <FormLabel>Correct Answer</FormLabel>
          <Input
            type={"text"}
            onChange={(e) => handleChange(e)}
            name="correct"
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
      <hr/>
      <TableContainer>
        <Table variant="simple">
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Questions</Th>
              <Th>Option-1</Th>
              <Th>Option-2</Th>
              <Th>Option-3</Th>
              <Th>Option-4</Th>
              <Th>Correct Answer</Th>
              <Th>EDIT</Th>
              <Th>DELETE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {hotelData?.map((ele) => (
              <Tr key={ele.id}>
                <Td>{ele.id}</Td>
                <Td>{ele.question}</Td>
                <Td>{ele.incorrectOption[0]}</Td>
                <Td>{ele.incorrectOption[1]}</Td>
                <Td>{ele.incorrectOption[2]}</Td>
                <Td>{ele.correctOption}</Td>
                <Td>{ele.correctOption}</Td>
                <Td>
                  <Button onClick={() => handleEdit(ele)}>Edit</Button>
                </Td>
                <Td onClick={() => deleteIt(ele.id)}>DELETE</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <BasicUsage isOpen={isOpen} onOpen={onOpen} ele={obj} onClose={onClose} />
    </Box>
  );
};

export default Admin;

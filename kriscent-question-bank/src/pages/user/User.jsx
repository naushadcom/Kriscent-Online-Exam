import React, { useEffect, useState } from "react";
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
  Stack,
  RadioGroup,
  Select,
  Radio,
} from "@chakra-ui/react";
import axios from "axios";

const User = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = React.useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/question`).then((res) => {
      setData(
        res.data.sort(() => 0.5 - Math.random()).filter((e, i) => i < 10)
      );
    });
  }, []);

  console.log(data);
  return (
    <VStack gap="10px">
      <h1 style={{ fontSize: "60px" }}>Question Bank</h1>
      {data &&
        data.map((ele, index) => {
          return (
            <Flex key={index} border="1px solid black">
              <VStack ml="10px" textAlign={"center"}>
                <h1 style={{ fontSize: "40px" }}>{ele.question}</h1>

                <RadioGroup onChange={setValue} defaultValue="1">
                  <Stack spacing={5} direction="row">
                    <Radio value="option1">{ele.incorrectOption[0]}</Radio>
                    <Radio value="option2">{ele.incorrectOption[1]}</Radio>
                    <Radio value="option3">{ele.incorrectOption[2]}</Radio>
                    <Radio value="option4">{ele.correctOption}</Radio>
                  </Stack>
                </RadioGroup>
              </VStack>
            </Flex>
          );
        })}
    </VStack>
  );
};

export default User;

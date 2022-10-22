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
    axios
      .get(`https://mock6naushaddeployed.herokuapp.com/question`)
      .then((res) => {
        setData(
          res.data.sort(() => 0.5 - Math.random()).filter((e, i) => i < 10)
        );
      });
  }, []);

  console.log(data);
  return (
    <Box>
      <Heading borderBottom="4px" marginBottom="20px">
        Question Bank
      </Heading>
      {data &&
        data.map((ele, index) => {
          return (
            <Box
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              padding="2%"
              width="80%"
              key={index}
              margin="auto"
              marginBottom="20px"
            >
              <Box style={{ marginBottom: "20px" }}>
                <h1 style={{ textAlign: "left", marginBottom: "10px" }}>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Question:</span>{" "}
                  {ele.question}
                </h1>

                <RadioGroup onChange={setValue} defaultValue="1">
                  <Stack direction="row">
                    <Radio value="option1">{ele.incorrectOption[0]}</Radio>
                    <Radio value="option2">{ele.incorrectOption[1]}</Radio>
                    <Radio value="option3">{ele.incorrectOption[2]}</Radio>
                    <Radio value="option4">{ele.correctOption}</Radio>
                  </Stack>
                </RadioGroup>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
};

export default User;

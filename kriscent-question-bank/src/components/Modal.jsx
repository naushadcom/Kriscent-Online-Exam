import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getHotels } from "../pages/admin/admin.action";
import { useDispatch, useSelector } from "react-redux";
function BasicUsage({ isOpen, ele, onClose, onOpen }) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correct, setCorrect] = useState("");
  const dispatch = useDispatch();
  // console.log(ele);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(question);
    console.log(option1)
    axios
      .patch(`https://mock6naushaddeployed.herokuapp.com/question/${ele.id}`, {
        question: question,
        incorrectOption: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        correctOption: correct,
      })
      .then((res) => dispatch(getHotels()))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* <Button onClick={onOpen}>Edit</Button> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={(e) => handleSubmit(e)}>
              <FormLabel>Question</FormLabel>
              <Input
                type="text"
                onChange={(e) => setQuestion(e.target.value)}
              />
              <FormLabel>Option1</FormLabel>
              <Input type="text" onChange={(e) => setOption1(e.target.value)} />
              <FormLabel>Option2</FormLabel>
              <Input type="text" onChange={(e) => setOption2(e.target.value)} />
              <FormLabel>Option3</FormLabel>
              <Input type="text" onChange={(e) => setOption3(e.target.value)} />
              <FormLabel>Option4</FormLabel>
              <Input type="text" onChange={(e) => setOption4(e.target.value)} />
              <FormLabel>Correct Answer</FormLabel>
              <Input
                type="text"
                onChange={(e) => setCorrect(e.target.value)}
              />
              <Input type="submit" />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicUsage;

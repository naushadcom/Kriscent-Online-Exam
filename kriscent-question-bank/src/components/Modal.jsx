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
  const [room, setRoom] = useState(0);
  const dispatch = useDispatch();
  console.log(ele);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(room);
    axios
      .patch(`http://localhost:3001/question/${ele.id}`, {
        no_of_persons: room,
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
              <FormLabel>no of Persons</FormLabel>
              <Input type="number" onChange={(e) => setRoom(e.target.value)} />
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

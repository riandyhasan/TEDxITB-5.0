import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function ModalCustom({
  title,
  content,
  isOpen,
  onClose,
  ...props
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mr="2rem" color="brand.primary" fontSize="2xl">
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody mb="0.75rem">{content}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

export default function AlertMessage({
  show,
  setShow,
  status = "success",
  title,
  description = "",
  ...props
}) {
  return show ? (
    <Alert status={status} {...props}>
      <AlertIcon />
      {title && <AlertTitle mr={2}>{title}</AlertTitle>}
      <AlertDescription>{description}</AlertDescription>
      {setShow && (
        <CloseButton
          onClick={() => setShow(false)}
          position="absolute"
          right="8px"
          top="8px"
        />
      )}
    </Alert>
  ) : null;
}
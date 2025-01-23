/* eslint-disable react/prop-types */
import { Button } from "@mantine/core";

const MyButton = ({ children, ...props }) => {
  return (
    <Button radius={"xl"} size="md" {...props}>
      {children}
    </Button>
  );
};

export default MyButton;

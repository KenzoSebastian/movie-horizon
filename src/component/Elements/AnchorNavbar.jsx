import { Anchor } from "@mantine/core";

const AnchorNavbar = ({ size = "lg", ...props }) => {
  return (
    <Anchor href={props.href} c="white" fw={500} size={size} underline="never">
      {props.children}
    </Anchor>
  );
};

export default AnchorNavbar;

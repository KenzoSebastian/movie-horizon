import { Box, Title, TextInput, Button } from "@mantine/core";
import Background from "../component/Elements/Background";
import {
  IconAt,
  IconLock,
  IconEye,
  IconEyeOff,
  IconBrandGoogle,
} from "@tabler/icons-react";
import { useState } from "react";

const SignIn = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const emailIcon = <IconAt size={18} />;
  const passwordIcon = <IconLock size={18} />;
  const eyeIcon = visiblePassword ? (
    <IconEyeOff
      size={18}
      className="eye-password"
      onClick={() => setVisiblePassword((prev) => !prev)}
    />
  ) : (
    <IconEye
      size={18}
      className="eye-password"
      onClick={() => setVisiblePassword((prev) => !prev)}
    />
  );
  return (
    <Box className="flex justify-center min-h-screen items-center">
      <Background />
      <Box
        p="lg"
        m="xl"
        className="w-full md:w-2/3 lg:w-2/5 rounded-2xl backdrop-blur-[5px] bg-navbar/10"
      >
        <Title mb={"xl"} className="text-primary">
          Sign In
        </Title>
        <TextInput
          label="Email"
          leftSection={emailIcon}
          description="Enter your email"
          placeholder="example@gmail.com"
          type="email"
          mb={"lg"}
        />
        <TextInput
          label="Password"
          leftSection={passwordIcon}
          rightSection={eyeIcon}
          description="Enter your password"
          placeholder="********"
          type={visiblePassword ? "text" : "password"}
        />
        <Box my={"xl"} className="flex justify-center">
          <Button
            radius="sm"
            c={"black"}
            px={40}
            size="md"
            className="bg-primary hover:bg-primaryDark hover:scale-105 transition-all duration-200"
          >
            Sign In
          </Button>
        </Box>
        <Box className="flex justify-between items-center">
          <span className="w-5/12 h-[1px] bg-white"></span>
          <Title order={4} className="text-center">
            Or
          </Title>
          <span className="w-5/12 h-[1px] bg-white"></span>
        </Box>
        <Box className="flex justify-center">
          <Button
            radius="sm"
            size="sm"
            bg={"blue.2"}
            c={"black"}
            mt={"lg"}
            className="flex items-center"
          >
            <IconBrandGoogle size={18} className="mr-2" />
            Sign In With Google
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;

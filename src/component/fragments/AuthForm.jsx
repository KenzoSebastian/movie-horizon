import { Box, Button, Loader, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import useFormIcon from "../../hooks/useFormIcon";
import { emailSchema, passwordSchema } from "../../utils/validationSchemas";

const AuthForm = ({ ...props }) => {
  const { visiblePassword, emailIcon, passwordIcon, eyeIcon } = useFormIcon();

  const loader = <Loader color="white" size="sm" />;

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validateInputOnChange: true,
    validate: zodResolver(
      z.object({
        email: emailSchema,
        password: passwordSchema,
      })
    ),
  });

  return (
    <form onSubmit={form.onSubmit(props.handleSubmit)}>
      <TextInput
        withAsterisk
        label="Email"
        leftSection={emailIcon}
        description="Enter your email"
        placeholder="example@gmail.com"
        type="email"
        mb={"lg"}
        key={form.key("email")}
        {...form.getInputProps("email")}
      />
      <TextInput
        withAsterisk
        label="Password"
        leftSection={passwordIcon}
        rightSection={eyeIcon}
        description="Enter your password"
        placeholder="********"
        type={visiblePassword ? "text" : "password"}
        key={form.key("password")}
        {...form.getInputProps("password")}
      />
      <Box mt={"xl"} className="flex justify-center">
        <Button
          radius="sm"
          c={"black"}
          mt={20}
          size="md"
          type="submit"
          disabled={props.disabled}
          className="bg-primary hover:bg-primaryDark hover:scale-105 transition-all duration-200 disabled:bg-primary/50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {props.disabled ? loader : props.titleButton}
        </Button>
      </Box>
    </form>
  );
};

export default AuthForm;

import { Box, Button, Drawer, Loader, TextInput } from "@mantine/core";
import useFormIcon from "../../hooks/useFormIcon";
import useUpdateUser from "../../hooks/useUpdateUser";
import { useAuthLogout } from "../../hooks/useAuth";

const MyDrawer = ({
  openedDrawer,
  setOpenedDrawer,
  user,
  setNotif,
}) => {
  const { emailIcon, personIcon } = useFormIcon();
  const {
    form,
    disabled,
    inputFileRef,
    handleOnCloseDrawer,
    handleOnSubmit,
    handleInputFile,
    handleFileChange,
    imageUrl,
  } = useUpdateUser(setOpenedDrawer, user, setNotif);
  const handleLogOut = useAuthLogout(setOpenedDrawer, user);

  const loader = <Loader color="white" size="sm" />;

  return (
    <Drawer
      opened={openedDrawer}
      onClose={handleOnCloseDrawer}
      position="right"
      withCloseButton
      overlayProps={{ backgroundOpacity: 0.5, blur: 3 }}
      className="relative"
    >
      <Drawer.Title className="text-3xl font-bold text-white mb-10">
        Profile
      </Drawer.Title>
      <Drawer.Body>
        <div className="relative w-fit mx-auto">
          <img
            src={
              user === null
                ? "../guest.png"
                : imageUrl !== null
                ? imageUrl
                : user.avatar
            }
            alt="avatar"
            className="w-44 rounded-full"
          />
          <img
            className="absolute bottom-0 right-0 w-11 h-11 hover:scale-105 transition-all cursor-pointer"
            src="./kamera.png"
            alt="Kamera"
            onClick={handleInputFile}
          />
        </div>
        <form onSubmit={form.onSubmit(handleOnSubmit)}>
          <TextInput
            accept="image/*"
            type="file"
            ref={inputFileRef}
            key={form.key("avatar")}
            onChange={handleFileChange}
            hidden
          />
          <TextInput
            withAsterisk
            label="Email"
            leftSection={emailIcon}
            description="Enter your email"
            placeholder="example@gmail.com"
            type="text"
            mb={"lg"}
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <TextInput
            withAsterisk
            label="Username"
            leftSection={personIcon}
            description="Enter your username"
            placeholder="John Doe"
            type="text"
            mb={"lg"}
            key={form.key("username")}
            {...form.getInputProps("username")}
          />
          <Box mt={"xl"} className="flex flex-col justify-center w-fit mx-auto">
            <Button
              radius="sm"
              c={"black"}
              mt={20}
              size="md"
              type="submit"
              disabled={disabled}
              className="bg-primary hover:bg-primaryDark hover:scale-105 transition-all duration-200 disabled:bg-primary/50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {disabled ? loader : "Update"}
            </Button>

            <Button
              radius="sm"
              c={"white"}
              mt={20}
              size="md"
              type="button"
              disabled={disabled}
              className="bg-red-700 hover:bg-red-800 hover:scale-105 transition-all duration-200"
              onClick={handleLogOut}
            >
              Log Out
            </Button>
          </Box>
        </form>
      </Drawer.Body>
    </Drawer>
  );
};

export default MyDrawer;

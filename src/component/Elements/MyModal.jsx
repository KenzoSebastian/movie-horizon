import { Button, Modal } from "@mantine/core";
import { Link } from "react-router-dom";

const MyModal = ({ opened, setOpened }) => {
  return (
    <Modal opened={opened} centered onClose={() => setOpened(false)} withCloseButton={false}>
      <h1 className="text-xl font-bold text-white md:text-2xl mb-2 ">
        Welcome to Movie Horizon
      </h1>
      <hr />
      <p className="text-base md:text-lg text-white mt-4">
        Please Sign In to Continue
      </p>
      <div className="mt-4 flex justify-end">
        <Link to="/signin" className="w-fit">
          <Button className="bg-primary hover:bg-primary hover:scale-105 transition-all" size="md" radius={"md"}>
            Sign In
          </Button>
        </Link>
      </div>
    </Modal>
  );
};

export default MyModal;

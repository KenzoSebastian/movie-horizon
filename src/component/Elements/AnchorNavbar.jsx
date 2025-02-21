import { Link } from "react-router-dom";

const AnchorNavbar = ({ size = "lg", ...props }) => {
  return (
    <Link
      to={props.to}
      onClick={props.onClick}
      className={`text-${size} font-semibold text-white w-full inline-block lg:w-fit hover:scale-105 transition-all`}
    >
      {props.children}
    </Link>
  );
};

export default AnchorNavbar;

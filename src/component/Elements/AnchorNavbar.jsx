import { Link } from "react-router-dom";

const AnchorNavbar = ({ size = "lg", ...props }) => {
  return (
    <Link to={props.to} className={`text-${size} font-semibold text-white w-full inline-block lg:w-fit`}>
      {props.children}
    </Link>
  );
};

export default AnchorNavbar;

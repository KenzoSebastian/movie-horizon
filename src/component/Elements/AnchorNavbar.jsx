import { Link } from "react-router-dom";

const AnchorNavbar = ({ size = "lg", ...props }) => {
  return (
    <Link to={props.to} className={`text-${size} font-semibold text-white`}>
      {props.children}
    </Link>
  );
};

export default AnchorNavbar;

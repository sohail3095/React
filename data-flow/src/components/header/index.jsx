import { Link } from "react-router";

const Header = ({ title, color }) => {
  return (
    <div className="header" style={{ background: color }}>
      <h2> {title} </h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact"> Contact </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

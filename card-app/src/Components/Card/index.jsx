import userImg from "../../assets/SohailKhan.JPG";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
const Card = ({ userImg, name, profile, linkdinUrl }) => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={userImg} alt="user" />
        </div>
        <div className="card-detail">
          <h3 className="user-name">{name} </h3>
          <span className="subtext"> {profile} </span>
          <ul>
            <li>
              <a href={linkdinUrl}>
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="/#">
                <FaSquareGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;

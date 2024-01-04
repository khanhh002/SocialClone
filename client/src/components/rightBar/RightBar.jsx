import "./rightBar.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";
import { useState } from "react";
const RightBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/motorsport/2023/Fahrer/M-Werksfahrer/2023/bmw-m-werksfahrer-erik-johansson-gallery.png/jcr:content/renditions/cq5dam.resized.img.585.low.time1683534203447.png"
                alt=""
              />
              <span>ERIK JOHANSSON</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/motorsport/2023/Fahrer/M-Werksfahrer/2023/bmw-m-werksfahrer-jens-klingmann-gallery.png/jcr:content/renditions/cq5dam.resized.img.585.low.time1683534217952.png"
                alt=""
              />
              <span>JENS KLINGMANN</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/motorsport/2023/Fahrer/M-Werksfahrer/2023/bmw-m-werksfahrer-jesse-krohn-gallery.png/jcr:content/renditions/cq5dam.resized.img.585.low.time1683534234513.png"
                alt=""
              />
              <p>
                <span>Jesse Krohn</span> uploaded a new post
              </p>
            </div>
            <span>1 days ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/motorsport/2023/Fahrer/M-Werksfahrer/2023/bmw-m-werksfahrer-maxime-martin-gallery.png/jcr:content/renditions/cq5dam.resized.img.585.low.time1683534249975.png"
                alt=""
              />
              <p>
                <span>Maxime Mart</span> just uploaded a post 
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/motorsport/2022/02_bmw-m-werksfahrer-dennis-gallery.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1642609634071.jpg"
                alt=""
              />
              <p>
                <span>Jake Dennis</span> changed his profile picture
              </p>
            </div>
            <span>2 hours ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/motorsport/2023/Fahrer/M-Werksfahrer/2023/bmw-m-werksfahrer-charles-weerts-gallery.png/jcr:content/renditions/cq5dam.resized.img.585.low.time1683535196573.png"
                alt=""
              />
              <p>
                <span>Charles Weerts</span> changed their cover picture
              </p>
            </div>
            <span>5 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;

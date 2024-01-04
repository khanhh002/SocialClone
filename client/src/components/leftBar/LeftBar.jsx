import "./leftBar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import {RssFeed , Chat, PlayCircle, Group, Bookmark, HelpOutline,WorkOutline, Event,School} from "@mui/icons-material";
import { useContext } from "react";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={"/upload/" + currentUser.profilePic} alt="" />
            <Link
              to={`/profile/${currentUser.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="name">{currentUser.name}</span>
            </Link>
          </div>
        </div>
      </div>
      <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>

                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>

                    </li>
                    <li className="sidebarListItem">
                        <PlayCircle className="sidebarIcon"/>
                        <span className="sidebarListItemText">Video</span>

                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>

                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">BookMarks</span>

                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>

                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>

                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>

                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">Courses</span>

                    </li>

                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                
    </div>
  );
};

export default LeftBar;

import React, { useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SettingsIcon from "@mui/icons-material/Settings";
import SidebarChannel from "./SidebarChannel";
import "./Sidebar.scss";
import { auth, db } from "../../firebase";
import { useAppSelector } from "../../app/fooks";
import { onSnapshot, collection, query } from "firebase/firestore";

const Sidebar = () => {
  const user = useAppSelector((state) => state.user);

  const q = query(collection(db, "channels"));

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const channelsResults = [];
      querySnapshot.docs.forEach((doc) => console.log(doc));
    });
  }, []);

  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>

        {/* sidebarChannels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
          <div className="sidebarChannelList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>

          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img src={user?.photo} onClick={() => auth.signOut()} />
              <div className="accountName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>

            <div className="sidebarVoice">
              <MicIcon />
              <HeadsetMicIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

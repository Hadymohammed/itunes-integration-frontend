import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCog, FaPodcast,FaColumns, FaThList, FaClock, FaStar } from "react-icons/fa";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


export default function SideMenu ({collapsed,setCollapsed}:{collapsed:boolean,setCollapsed:Function}) {
    // const [collapsed, setCollapsed] = useState(false);
  const styles = {
    sideBarHeight: {
      height: "100vh"
    },
    menuIcon: {
      float: "right",
      margin: "10px"
    }
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <div style={{cursor:"pointer",zIndex:"1",position:"absolute",right:"1px", margin:"10px"}}>
        <div onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </div>
      <Menu>
        <MenuItem icon={<FaColumns />} href="#"> Home</MenuItem>
        <SubMenu label="Your staff" icon={<FaThList />}>
          <MenuItem icon={<FaPodcast/>}>My podcasts</MenuItem>
          <MenuItem icon={<FaStar/>}>Favourites</MenuItem>
          <MenuItem icon={<FaClock/>}>Recent</MenuItem>
        </SubMenu>
        <MenuItem icon={<FaCog />}>Settings</MenuItem>
      </Menu>
    </Sidebar>
  );
}
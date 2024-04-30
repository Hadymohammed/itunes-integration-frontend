import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCog, FaPodcast,FaColumns, FaThList, FaClock, FaStar, FaQuestion, FaBook, FaComment } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
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
    <Sidebar style={styles.sideBarHeight} collapsed={collapsed} width="270px">
      <div className={`flex ${!collapsed? "justify-between items-center" : "justify-center" }  p-2`}>
        {!collapsed? <a target="_blanck" href="https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html">
          <img src="/itunesLogo.png" alt="logo" className="w-32 ml-6"/> </a>:null}
        <div onClick={onClickMenuIcon}>
          <AiOutlineMenu style={{height:"25px",width:"25px"}} className="cursor-pointer"/>
        </div>
      </div>
      <Menu>
        <MenuItem icon={<FaColumns />} href="#" className="md-3 font-medium text-lg"> Explore Shows</MenuItem>
        <MenuItem icon={<FaPodcast/>} className="mt-3 md-3 font-medium text-lg">My podcasts</MenuItem>
        <MenuItem icon={<FaStar/>} className="mt-3 md-3 font-medium text-lg">Favourites</MenuItem>
        <MenuItem icon={<FaClock/>} className="mt-3 md-3 font-medium text-lg">Recent</MenuItem>
        
        <hr className="w-full h-0.5 bg-red-700"/>
          
        <MenuItem icon={<FaCog />} className="mt-3 md-3 font-medium text-lg">Settings</MenuItem>
        <MenuItem icon={<FaQuestion />} className="mt-3 md-3 font-medium text-lg">Help</MenuItem>
        <MenuItem icon={<FaBook />} className="mt-3 md-3 font-medium text-lg">Policies</MenuItem>
        <MenuItem icon={<FaComment />} className="mt-3 md-3 font-medium text-lg">Feedbacks</MenuItem>

        <hr className="w-full h-0.5 bg-red-700"/>

        <a target="_blanck" href="https://play.google.com/store/search?q=%D8%B1%D8%A7%D8%AF%D9%8A%D9%88+%D8%AB%D9%85%D8%A7%D9%86%D9%8A%D8%A9&c=apps&hl=en">
          <MenuItem icon={<FaArrowUpRightFromSquare />} className="mt-3 md-3 font-medium text-lg">Get the Android app</MenuItem>
        </a>
        <a target="_blanck" href="https://apps.apple.com/us/app/radio-thmanyah-%D8%B1%D8%A7%D8%AF%D9%8A%D9%88-%D8%AB%D9%85%D8%A7%D9%86%D9%8A%D8%A9/id1641282078">
          <MenuItem icon={<FaArrowUpRightFromSquare />} className="mt-3 md-3 font-medium text-lg">Get the iOS app</MenuItem>
        </a>





      </Menu>
    </Sidebar>
  );
}
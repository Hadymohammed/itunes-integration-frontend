import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCog, FaPodcast, FaColumns, FaThList, FaClock, FaStar } from "react-icons/fa";

export default function Navbar({ collapsed }: { collapsed: boolean }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const styles = {
    navbar: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    menuItem: {
      margin: "0 10px",
      cursor: "pointer",
    },
    dropdownMenu: {
      top: "100%",
      left: "0",
      backgroundColor: "#333",
      color: "#fff",
      padding: "10px",
    },
    dropdownMenuItem: {
      margin: "5px 0",
      cursor: "pointer",
      display: "flex",
    },
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div style={styles.navbar}>
      <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
        <div style={styles.menuItem}>Home</div>
        <div style={{ ...styles.menuItem, position: "relative" }} onClick={toggleDropdown}>
          Your staff
          {showDropdown && (
            <div className="z-50 absolute" style={styles.dropdownMenu}>
              <div className="flex items-center" style={styles.dropdownMenuItem}>
              <FaPodcast className="mr-2"/> <div>My podcasts</div></div>
              <div className="flex items-center" style={styles.dropdownMenuItem}>
              <FaStar className="mr-2"/> <div>Favourites</div></div>
              <div className="flex items-center" style={styles.dropdownMenuItem}>
              <FaClock className="mr-2"/> <div>Recent</div></div>
            </div>
          )}
        </div>
        <div style={styles.menuItem}>Settings</div>
      </div>

    </div>
  );
}

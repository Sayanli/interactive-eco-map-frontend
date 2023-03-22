import "../css/sidebar.css";
import React, { useState } from "react";
import MultiRangeSlider from "./MultiRangeSlider";
import { RiHome4Line, RiTeamLine, RiCalendar2Line,  RiFolder2Line, RiUserFollowLine, RiPlantLine, RiStackLine, RiUserUnfollowLine } from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";
import axios from "axios";


const baseUrl = "http://localhost:3001/api/positions"

const CustomSidebar = (props) => {
  
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  function query(){
    axios.get(baseUrl).then((res) => {
      props.handleChangeProp(res.data.data)
      console.log(res.data.data)
    })
  }

  return (
    <div>
      <Sidebar
        className={`app ${toggled ? "toggled" : ""}`}
        style={{ height: "100%", position: "absolute" }}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <main>
          <Menu>
            {collapsed ? (
              <MenuItem
                icon={<FiChevronsRight />}
                onClick={handleCollapsedChange}
              ></MenuItem>
            ) : (
              <MenuItem
                suffix={<FiChevronsLeft />}
                onClick={handleCollapsedChange}
              >
                <div
                  style={{
                    padding: "9px",
                    // textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 14,
                    letterSpacing: "1px"
                  }}
                >
                  ECOMAP
                </div>
              </MenuItem>
            )}
            <hr />
          </Menu>

          <Menu>

            <MenuItem icon={<RiHome4Line />}>Dashboard</MenuItem>

            <SubMenu defaultOpen label={"Professors"} icon={<RiTeamLine />}>
              <MenuItem>
                <MultiRangeSlider name={"Winter"} min={0} max={1000} onChange={({ min, max }) => console.log(`mint = ${min}, maxt = ${max}`)}/>
              </MenuItem>
              <MenuItem>
                <MultiRangeSlider name={"Spring"} min={0} max={1000} onChange={({ min, max }) => console.log(`mint = ${min}, maxt = ${max}`)}/>
              </MenuItem>
              <MenuItem>
                <MultiRangeSlider name={"Summer"} min={0} max={1000} onChange={({ min, max }) => console.log(`mint = ${min}, maxt = ${max}`)}/>
              </MenuItem>
              <MenuItem>
                <MultiRangeSlider name={"Autumn"} min={0} max={1000} onChange={({ min, max }) => console.log(`mint = ${min}, maxt = ${max}`)}/>
              </MenuItem>
              <MenuItem icon={<RiUserUnfollowLine />}>Ex Professors</MenuItem>
              <MenuItem icon={<RiCalendar2Line />}>Probation Period</MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Records"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}>Senior Students</MenuItem>
              <MenuItem icon={<RiPlantLine />}>Junior Students</MenuItem>
            </SubMenu>
            <button onClick={query}>button</button>
          </Menu>
        </main>
      </Sidebar>

    </div>
  );
}
export default CustomSidebar;

import "../css/sidebar.css";
import React, { useState } from "react";
import MultiRangeSlider from "./MultiRangeSlider";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";
import axios from "axios";


const baseUrl = "http://localhost:3001/api/positions"

const CustomSidebar = (props) => {
  
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const [springTempMore, setSpringTempMore] = useState(-100)
  const [springTempLess, setSpringTempLess] = useState(100)

  const [summerTempMore, setSummerTempMore] = useState(-100)
  const [summerTempLess, setSummerTempLess] = useState(100)

  const [autumnTempMore, setAutumnTempMore] = useState(-100)
  const [autumnTempLess, setAutumnTempLess] = useState(100)

  const [winterTempMore, setWinterTempMore] = useState(-100)
  const [winterTempLess, setWinterTempLess] = useState(100)

  const [airPollutionMore, setAirPollutionMore] = useState(0)
  const [airPollutionLess, setAirPollutionLess] = useState(1000)

  const [humidityMore, setHumidityMore] = useState(0)
  const [humidityLess, setHumidityLess] = useState(100)

  const [cityQualityIndexMore, setCityQualityIndexMore] = useState(0)
  const [cityQualityIndexLess, setCityQualityIndexLess] = useState(360)

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

  function post_query(){
    axios.post('http://localhost:3001/api/filter', {
      spring_temp_more: springTempMore,
      spring_temp_less: springTempLess,
      summer_temp_more: summerTempMore,
      summer_temp_less: summerTempLess,
      autumn_temp_more: autumnTempMore,
      autumn_temp_less: autumnTempLess,
      winter_temp_more: winterTempMore,
      winter_temp_less: winterTempLess,
      air_pollution_more: airPollutionMore,
      air_pollution_less: airPollutionLess,
      humidity_more: humidityMore,
      humidity_less: humidityLess
    }).then((response) => {
      props.handleChangeProp(response.data.data);
    }, (error) => {
      console.log(error);
    });
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
        backgroundColor={"white"}
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
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 14,
                    letterSpacing: "1px"
                  }}
                >
                  ecomap
                </div>
              </MenuItem>
            )}
            <hr/>
          </Menu>

          <Menu>

            <MenuItem>
              <MultiRangeSlider name={"Качество воздуха"} min={0} max={1000} onChange={({ min, max }) => { setAirPollutionMore(min); setAirPollutionLess(max);}}/>
            </MenuItem>

            <SubMenu defaultOpen label={"Средняя температура"}>
              <MenuItem>
                  <MultiRangeSlider name={"Зима"} min={-100} max={100} onChange={({ min, max }) => { setWinterTempMore(min); setWinterTempLess(max);}}/>
              </MenuItem>
              <MenuItem>
                  <MultiRangeSlider name={"Осень"} min={-100} max={100} onChange={({ min, max }) => { setAutumnTempMore(min); setAutumnTempLess(max);}}/>
              </MenuItem>
              <MenuItem>
                  <MultiRangeSlider name={"Лето"} min={-100} max={100} onChange={({ min, max }) => { setSummerTempMore(min); setSummerTempLess(max);}}/>
              </MenuItem>
              <MenuItem>
                  <MultiRangeSlider name={"Весна"} min={-100} max={100} onChange={({ min, max }) => { setSpringTempMore(min); setSpringTempLess(max);}}/>
              </MenuItem>
            </SubMenu>

            <MenuItem>
                  <MultiRangeSlider name={"Влажность воздуха"} min={0} max={100} onChange={({ min, max }) => { setHumidityMore(min); setHumidityLess(max);}}/>
            </MenuItem>

            <MenuItem>
                  <MultiRangeSlider name={"Индекс качества города"} min={0} max={360} onChange={({ min, max }) => { setCityQualityIndexMore(min); setCityQualityIndexLess(max);}}/>
            </MenuItem>
            <MenuItem>
            <div style={{ textAlign: "center" }}>
              <text onClick={post_query} className="bLR">Apply</text>
            </div>
            </MenuItem>
          </Menu>
        </main>
      </Sidebar>

    </div>
  );
}
export default CustomSidebar;

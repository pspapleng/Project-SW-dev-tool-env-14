import React, { useEffect, useState, useCallback, useMemo } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import ServiceCenterCard from "../../components/Cards/ServiceCard";
import { MdFilterList, MdOutlineClose } from "react-icons/md";
import axios from "axios";
import request from "../../services/api/auth";

function ServiceCenter() {
  const [inputText, setInputText] = useState("");
  const [online, setOnline] = useState(false);
  const [onsite, setOnsite] = useState(false); 

  const data = [
    {
        "id": "025acdad-900a-4172-982c-f45d0310c436",
        "createAt": "2022-02-10T16:19:25.359Z",
        "updateAt": "2022-02-10T16:19:25.359Z",
        "deleteAt": null,
        "name": "Center for Psychological Wellness",
        "description": "ศูนย์สุขภาวะทางจิต เป็นศูนย์ให้บริการทางจิตวิทยาของคณะจิตวิทยา จุฬาลงกรณ์มหาวิทยาลัย ที่มีจุดมุ่งหมายในการบูรณาการองค์ความรู้ทางจิตวิทยากับการให้บริการเพื่อพัฒนาและเสริมสร้างสุขภาวะทางจิตให้กับสังคมไทย",
        "imageUrl": "https://user-images.githubusercontent.com/56313629/152805064-8554e1d2-4d2a-4138-9214-2a5a9cffbf23.jpg",
        "type": "BOTH",
        "address": "ชั้น 5 อาคารบรมราชชนนีศรีศตพรรษ จุฬาลงกรณ์มหาวิทยาลัย ซอยจุฬาฯ12 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน",
        "province": "เชียงใหม่",
        "website": "-",
        "facebook": "https://www.facebook.com/WellnessPsyCU/",
        "phone": "02-218-1171, 061-736-2859",
        "email": "wellness.chula@gmail.com",
        "office_hours": "วันจันทร์ - ศุกร์ เวลา 09.00 - 17.00 น. (ยกเว้นวันหยุดนักขัตฤกษ์)",
        "cost": "800฿",
        "latitude": "13.7552463",
        "longitude": "100.5296089"
    }
];


  const inputHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    }
  };

  const getSearchResult = useMemo(() => {
    let result;
    if (online && onsite) {
      const resultCheck = data.filter((e) => e.type.includes("BOTH"));
      result = resultCheck.filter((e) => e.name.toLowerCase().includes(inputText) || e.province.toLowerCase().includes(inputText));
    } else if (onsite) {
      const resultCheck = data.filter((e) => e.type.includes("OFFLINE") || e.type.includes("BOTH")  );
      result = resultCheck.filter((e) => e.name.toLowerCase().includes(inputText) || e.province.toLowerCase().includes(inputText));
    } else if (online) {
      const resultCheck = data.filter((e) => e.type.includes("ONLINE") || e.type.includes("BOTH"));
      result = resultCheck.filter((e) => e.name.toLowerCase().includes(inputText) || e.province.toLowerCase().includes(inputText));
    } else {
      result = data.filter((e) => e.name.toLowerCase().includes(inputText) || e.province.toLowerCase().includes(inputText));
    }

    return result;
  }, [inputText, online, onsite])
  console.log(inputText)


  // useEffect( () => {
  //   const fetchMyAPI = async () => {
  //     const response = await axios.get('http://localhost:3000/service_center')
  //     console.log(response.data)

  //    }

  //    fetchMyAPI()
  //  }, []);
  return (
    <div className="service-center">
      <div className="center-container">
        <div className="center-search">
          <Paper
            className="searchBar-search"
            component="form"
            sx={{
              p: "2px",
              display: "flex",
              width: "100%",
              backgroundColor: "darkgray",
            }}
          >
            <SearchIcon sx={{ p: 1, fontSize: "25px", color: "white" }} />
            <InputBase
              id="search-bar"
              className="search"
              sx={{
                ml: 1,
                mt: "4px",
                flex: 1,
                width: "100%",
                color: "white",
                fontSize: "20px",
              }}
              placeholder="Search Service Center name or province"
              onKeyDown={inputHandler}
            />
            {/* <ClearIcon sx={{ p: 1, fontSize: "25px", color: "white" }} /> */}
          </Paper>
        </div>
        <div className="center-body">
          <div className="center-body-container">
            <div className="all-service">
              <ServiceCenterCard data={getSearchResult} />
            </div>
            <div className="filter-search">
              <Paper
                className="filter"
                component="form"
                sx={{
                  p: "2px",
                  mt: "16px",
                  width: "100%",
                  backgroundColor: "white",
                  boxShadow: "none"
                }}
              >
                <div className="header-filter-container">
                  <div className="header-filter">
                    <MdFilterList
                      style={{ paddingTop: "19px", fontSize: "25px" }}
                    />
                    <h3>Filter</h3>
                  </div>
                  <FormControlLabel control={<Checkbox color="default" id="chcek-favorite"/>} label="Favorite"/>
                  <h3>รูปแบบการให้บริการ</h3>
                  <FormControlLabel control={<Checkbox color="default" id="chcek-onsite"/>} label="On Site" value="onsite" onChange={(e) => setOnsite(e.target.checked)}/><br />
                  <FormControlLabel control={<Checkbox color="default" id="chcek-online"/>} label="Online" onChange={(e) => setOnline(e.target.checked)}/>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCenter;

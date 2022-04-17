import React, { useEffect, useState, useCallback, useMemo } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import ServiceCenterCard from "../../components/Cards/ServiceCard";
import { MdFilterList, MdOutlineClose } from "react-icons/md";

import request from "../../services/api/auth";

function ServiceCenter() {
  const [inputText, setInputText] = useState("");
  const [online, setOnline] = useState(false);
  const [onsite, setOnsite] = useState(false); 
  const [data, setData] = useState([]);

useEffect( () => {
  const fetchMyAPI = async () => {
    const response = await request.getAllServiceCenter()
    // console.log(response.data)
    const dataArr = []
    dataArr.push(response.data)
    setData([...response.data])
   }

   fetchMyAPI()
 }, []);


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
  }, [inputText, online, onsite, data])


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

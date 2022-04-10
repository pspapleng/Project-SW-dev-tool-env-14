import React, { useEffect, useState, useCallback } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import ServiceCenterCard from "../../components/Cards/ServiceCard";
import { MdFilterList } from "react-icons/md";
import axios from "axios";
import request from "../../services/api/auth";

function ServiceCenter() {
  const data = [
    {
      id: "31a26fa9-55db-4059-b4a3-4c59de3f9b5b",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "OneManCounselor",
      description:
        "ปรึกษาปัญหาชีวิตกับนักจิตวิทยา เพื่อเข้าใจสาเหตุของปัญหาที่แท้จริง จนสามารถปรับวิธีคิด และปรับแนวทางการใช้ชีวิตให้ลงตัวยิ่งขึ้น คลี่คลายปัญหาภายในจิตใจ และกลับมามีความสุขอีกครั้ง",
      imageUrl:
        "https://341682-1054383-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/OneManCounselor.jpg",
      type: "BOTH",
      address:
        "อาคารวนาเพลส ชั้น1 (ฝั่งลานจอดรถด้านข้างอาคาร) \nซอยอยู่เจริญ16 ถนนรัชดาภิเษก (ซอยรัชดาภิเษก3) เขตดินแดง",
      province: "กรุงเทพมหานคร",
      website: "https://www.onemancounselor.com/",
      facebook: "https://www.facebook.com/onemancounselor",
      phone: "-",
      email: "onemancounselor@gmail.com",
      office_hours:
        "ทุกวัน ตามการนัดหมายที่สะดวก พบตัว (งดปรึกษาพบตัวชั่วคราวในช่วงสถานการณ์โควิด) เวลา 10.00 – 18.00 น. โทรศัพท์ เวลา 10.00 – 20.00 น. ออนไลน์(วิดีโอคอล หรือแชท) เวลา 10.00 – 20.00 น.",
      cost: "1300฿ - 3000฿",
      latitude: "13.77396306",
      longitude: "100.5651552",
    },
    {
      id: "31a26fa9-55db-4059-b4a3-4c59de3f9b5b",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "OneManCounselor",
      description:
        "ปรึกษาปัญหาชีวิตกับนักจิตวิทยา เพื่อเข้าใจสาเหตุของปัญหาที่แท้จริง จนสามารถปรับวิธีคิด และปรับแนวทางการใช้ชีวิตให้ลงตัวยิ่งขึ้น คลี่คลายปัญหาภายในจิตใจ และกลับมามีความสุขอีกครั้ง",
      imageUrl:
        "https://341682-1054383-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/OneManCounselor.jpg",
      type: "BOTH",
      address:
        "อาคารวนาเพลส ชั้น1 (ฝั่งลานจอดรถด้านข้างอาคาร) \nซอยอยู่เจริญ16 ถนนรัชดาภิเษก (ซอยรัชดาภิเษก3) เขตดินแดง",
      province: "กรุงเทพมหานคร",
      website: "https://www.onemancounselor.com/",
      facebook: "https://www.facebook.com/onemancounselor",
      phone: "-",
      email: "onemancounselor@gmail.com",
      office_hours:
        "ทุกวัน ตามการนัดหมายที่สะดวก พบตัว (งดปรึกษาพบตัวชั่วคราวในช่วงสถานการณ์โควิด) เวลา 10.00 – 18.00 น. โทรศัพท์ เวลา 10.00 – 20.00 น. ออนไลน์(วิดีโอคอล หรือแชท) เวลา 10.00 – 20.00 น.",
      cost: "1300฿ - 3000฿",
      latitude: "13.77396306",
      longitude: "100.5651552",
    },
  ];

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
              sx={{
                ml: 1,
                mt: "4px",
                flex: 1,
                width: "100%",
                color: "white",
                // fontWeight: "bold",
                fontSize: "20px",
              }}
              placeholder="Search equipment name"
              // onKeyDown={inputHandler}
            />
          </Paper>
        </div>
        <div className="center-body">
          <div className="center-body-container">
            <div className="all-service">
              <ServiceCenterCard data={data} />
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
                  <FormControlLabel control={<Checkbox color="default"/>} label="Favorite" />
                  <h3>รูปแบบการให้บริการ</h3>
                  <FormControlLabel control={<Checkbox color="default"/>} label="Onsite" /><br />
                  <FormControlLabel control={<Checkbox color="default"/>} label="Online" />
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

import React, { useEffect, useState, useCallback, useMemo } from "react";
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
  const [inputText, setInputText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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
      "province": "กรุงเทพมหานคร",
      "website": "-",
      "facebook": "https://www.facebook.com/WellnessPsyCU/",
      "phone": "02-218-1171, 061-736-2859",
      "email": "wellness.chula@gmail.com",
      "office_hours": "วันจันทร์ - ศุกร์ เวลา 09.00 - 17.00 น. (ยกเว้นวันหยุดนักขัตฤกษ์)",
      "cost": "800฿",
      "latitude": "13.7552463",
      "longitude": "100.5296089"
  },
  {
      "id": "450c0f37-cdcb-48bd-86de-7f03fbf9d1d4",
      "createAt": "2022-02-10T16:19:25.359Z",
      "updateAt": "2022-02-10T16:19:25.359Z",
      "deleteAt": null,
      "name": "คลินิกจิตเวช โรงพยาบาลกลาง",
      "description": "โรงพยาบาลกลางเป็นสถานที่ให้บริการบำบัดรักษาผู้ป่วย สร้างเสริมสุขภาพอนามัย และป้องกันโรค โดยเน้นบริการที่ดีเลิศ ตลอดจนปรับปรุงฟื้นฟูสภาพแวดล้อมและบรรยากาศทั้งภายในอาคารและรอบโรงพยาบาลให้ดีขึ้นเพื่อคุณภาพชีวิตที่ดีแก่ผู้รับบริการ",
      "imageUrl": "https://hivthai.org/wp-content/uploads/home-04.jpg",
      "type": "OFFLINE",
      "address": "514 ถนนหลวง ป้อมปราบศัตรูพ่าย",
      "province": "กรุงเทพมหานคร",
      "website": "http://www.klanghospital.go.th/",
      "facebook": "https://www.facebook.com/PRK514/",
      "phone": "0-2220-8000",
      "email": "-",
      "office_hours": "ทุกวันพฤหัสบดีที่ 1 และ 3 ของเดือน เวลา 10.00 – 12.00 น.",
      "cost": "200฿ - 1000฿",
      "latitude": "13.75176715",
      "longitude": "100.4789996"
  },
  {
      "id": "46f2c6a1-5f8a-472a-b282-70788c74748c",
      "createAt": "2022-02-10T16:19:25.359Z",
      "updateAt": "2022-02-10T16:19:25.359Z",
      "deleteAt": null,
      "name": "โรงพยาบาลตำรวจ",
      "description": "คลินิกเฉพาะทางด้านจิตเวชและยาเสพติด",
      "imageUrl": "https://user-images.githubusercontent.com/56313629/152824148-91e0d3ad-0cef-4c9c-98b7-5b5d82c32c8b.jpg",
      "type": "OFFLINE",
      "address": "สำนักงานตำรวจแห่งชาติ 492/1 ถนนพระราม 1 ปทุมวัน",
      "province": "เยอรมัน",
      "website": "https://www.policehospital.org/content/opd.php?opdID=0005&opddata_id=0027",
      "facebook": "https://www.facebook.com/policehosp/",
      "phone": "0-2207-6000",
      "email": "pgh4.0pr@gmail.com",
      "office_hours": "วันจันทร์ - วันศุกร์ เวลา 08.00 – 12.00 น. ยกเว้น วันหยุดราชการ",
      "cost": "400฿ - 500฿",
      "latitude": "13.74361998",
      "longitude": "100.5386972"
  },
  {
      "id": "25fe8586-3c25-43cd-ac45-dbec99a75208",
      "createAt": "2022-02-10T16:19:25.359Z",
      "updateAt": "2022-02-10T16:19:25.359Z",
      "deleteAt": null,
      "name": "The Oasis",
      "description": "คลินิกจิตเวช ให้การปรึกษาด้านสุขภาพจิต จิตบำบัด โดย จิตแพทย์ และทีมผู้เชี่ยวชาญ",
      "imageUrl": "https://user-images.githubusercontent.com/56313629/152838537-ac718773-67c0-4599-9f49-a5f0d2a41522.png",
      "type": "OFFLINE",
      "address": "1408/41 ถนนพหลโยธิน แขวงจอมพล เขตจตุจักร",
      "province": "กรุงเทพมหานคร",
      "website": "https://www.theoasiscare.com/",
      "facebook": "https://www.facebook.com/theoasiscare",
      "phone": "065-635-1561",
      "email": "contact@theoasiscare.com",
      "office_hours": "วันจันทร์ - วันศุกร์ เวลา 12.00 - 20.00 น. วันเสาร์และวันอาทิตย์ เวลา 10.00 - 18.00 น.",
      "cost": "2000฿ - 14,500฿",
      "latitude": "13.82135649",
      "longitude": "100.5653177"
  },
  {
      "id": "81171296-b8af-4013-8d2a-0ff822a7d1e3",
      "createAt": "2022-02-10T16:19:25.359Z",
      "updateAt": "2022-02-10T16:19:25.359Z",
      "deleteAt": null,
      "name": "โรงพยาบาลมนารมย์",
      "description": "โรงพยาบาลมนารมย์เป็นโรงพยาบาลเอกชนเฉพาะทางด้านสุขภาพจิต ที่มอบทางเลือกใหม่สำหรับผู้ที่ต้องการค้นหาและพัฒนาศักยภาพในตัวเองเพื่อคุณภาพชีวิตที่ดีขึ้น การดูแลรักษาสุขภาพจิตให้แข็งแรงสมบูรณ์เป็นการลงทุนที่คุ้มค่า และยั่งยืนสำหรับการใช้ชีวิตอย่างเป็นสุข",
      "imageUrl": "https://user-images.githubusercontent.com/56313629/152841505-46719a2b-ba36-4dc1-af34-c53c9dc2053b.jpg",
      "type": "OFFLINE",
      "address": "เลขที่ 9 ถนนสุขุมวิท 70/3 แขวงบางนาใต้ เขตบางนา",
      "province": "เชียงใหม่",
      "website": "https://www.manarom.com/",
      "facebook": "https://www.facebook.com/ManaromHospital",
      "phone": "02-725-9595, 02-032-9595",
      "email": "contact@manarom.com",
      "office_hours": "ทุกวัน เวลา 07.00 – 20.00 น.",
      "cost": "500฿ - 4,000฿",
      "latitude": "13.66465858",
      "longitude": "100.6018096"
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
    const result = data.filter((e) => e.name.toLowerCase().includes(inputText) || e.province.toLowerCase().includes(inputText));
    // setSearchResult(result);
    return result;
  }, [inputText])
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
              sx={{
                ml: 1,
                mt: "4px",
                flex: 1,
                width: "100%",
                color: "white",
                fontSize: "20px",
              }}
              placeholder="Search equipment name and province"
              onKeyDown={inputHandler}
            />
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

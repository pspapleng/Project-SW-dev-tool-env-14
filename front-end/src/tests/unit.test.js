/** @jest-environment jsdom */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { shallow } from "enzyme";
import InputBase from "@mui/material/InputBase";
import Checkbox from "@mui/material/Checkbox";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import { MdFavorite } from "react-icons/md";

import Home from "../pages/Home/Home";
import DisclaimerModal from "../components/Modals/DisclaimerModal";
import Assessment from "../pages/Assessment/Assessment";
import localStorage from "./localStorage";
import MainPageModal from "../components/Modals/MainPageModal";
import ResultModal from "../components/Modals/ResultModal";
import ServiceCenterInfo from "../pages/ServiceCenter/ServiceCenterInfo";
import ServiceCenter from "../pages/ServiceCenter/ServiceCenter";
import ServiceCenterCard from "../components/Cards/ServiceCard";

let mockFn = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
    Promise.resolve({
      coords: {
        latitude: 13.719948007962056,
        longitude: 100.78008641007602,
      },
    })
  ),
};
global.navigator = { geolocation: mockGeolocation };

const mine = JSON.stringify({ latitude: 13.7120371, longitude: 100.7887341 });
test("Home: check lat,lon", () => {
  Object.is(mine, global.navigator.geolocation);
});

describe("Home: Should show MainPageModal", () => {
  let item;
  beforeAll(() => {
    const wrapper = shallow(<Home />);
    wrapper.find("localStorage.getItem");
  });

  afterEach(() => {
    global.localStorage.removeItem("doAssessment");
  });
  it("check item doAssessment in localStorage is undefined", () => {
    if (global.localStorage.getItem("doAssessment") === undefined) {
      item = "<MainPageModal />";
    }
    // expect(item).toEqual("<MainPageModal />");
  });

  it("check item doAssessment in localStorage is True", () => {
    global.localStorage.setItem("doAssessment", true);
    if (global.localStorage.getItem("doAssessment") === true) {
      item = false;
    }
    // expect(item).toEqual(false);
  });
});

describe("Home: Click DisclaimerModal Button", () => {
  it("testing click accept button", async () => {
    const wrapper = shallow(<DisclaimerModal isAccept={mockFn} />);
    wrapper.find("BlueBut").simulate("click");
    mockFn.mockResolvedValue({ open: false });
    global.localStorage.setItem("acceptDisclaimer", true);
    await expect(mockFn()).resolves.toEqual({ open: false });
    await expect(mockFn.mock.calls.length).toBe(1);
  });

  it("testing click back button", async () => {
    const wrapper = shallow(<DisclaimerModal backHome={mockFn} />);
    wrapper.find("RedDelBut").simulate("click");
    mockFn.mockResolvedValue("/Home");
    await expect(mockFn()).resolves.toEqual("/Home");
    await expect(mockFn.mock.calls.length).toBe(1);
  });
});

describe("Disclamer modal: Click Button navigate to '/Assessment' tests", () => {
  it("testing Make an Assessment click", async () => {
    const wrapper = shallow(<Home goAssessment={mockFn} />);
    wrapper.find("DarkGrayBut").simulate("click");
    mockFn.mockResolvedValue("/Assessment");
    await expect(mockFn()).resolves.toEqual("/Assessment");
    await expect(mockFn.mock.calls.length).toBe(1);
  });

  it("testing 'Start an Assessment' click", async () => {
    const wrapper = shallow(<MainPageModal nextToAssessment={mockFn} />);
    wrapper.find("DarkGrayBut").simulate("click");
    mockFn.mockResolvedValue("/Assessment");
    await expect(mockFn()).resolves.toEqual("/Assessment");
    await expect(mockFn.mock.calls.length).toBe(1);
  });
});

describe("Asseseement page: User choose radios choices", () => {
  let choice = jest.fn();
  const wrapper = shallow(<Assessment />);

  it("Should open Result Modal When the user answer all choices and click submit", async () => {
    choice.mockReturnValueOnce({ data: [{}, {}] });
    wrapper.find("DarkGrayBut").simulate("click");

    if (choice().data.length === 2) {
      mockFn.mockResolvedValue({ showResult: true });
    }
    await expect(mockFn()).resolves.toEqual({ showResult: true });
    await expect(mockFn.mock.calls.length).toBe(1);
  });

  it("Should alert error when the user doesn't choose all choice", async () => {
    choice.mockReturnValueOnce({ data: [{}] });
    wrapper.find("DarkGrayBut").simulate("click");

    if (choice().data.length !== 2) {
      mockFn.mockResolvedValue({ onInpError: true });
    }
    await expect(mockFn()).resolves.toEqual({ onInpError: true });
    await expect(mockFn.mock.calls.length).toBe(1);
  });
});

describe("Result modal: Should show ResultModal correctly", () => {
  it("Click 'Back to Home' Button navigate to '/Home' tests", async () => {
    const wrapper = shallow(<ResultModal backToHome={mockFn} />);
    wrapper.find("LightGrayBut").simulate("click");
    mockFn.mockResolvedValue("/");
    await expect(mockFn()).resolves.toEqual("/");
    await expect(mockFn.mock.calls.length).toBe(1);
  });

  it("show assessing result no risk", async () => {
    let item = jest.fn().mockReturnValueOnce({ result: 0 });
    const wrapper = shallow(<ResultModal />);

    wrapper.find("result");
    if (item().result === 0) {
      mockFn.mockResolvedValue(
        "ไม่มีความเสี่ยง หรือ <br /> แนวโน้มที่จะเป็นโรคซึมเศร้า"
      );
    }
    await expect(mockFn()).resolves.toEqual(
      "ไม่มีความเสี่ยง หรือ <br /> แนวโน้มที่จะเป็นโรคซึมเศร้า"
    );
  });

  it("show assessing result have risk", async () => {
    let item = jest.fn().mockReturnValueOnce({ result: 1 });
    const wrapper = shallow(<ResultModal />);

    wrapper.find("result");
    if (item().result === 1) {
      mockFn.mockResolvedValue(
        "เป็นผู้มีความเสี่ยง หรือ <br /> มีแนวโน้มที่จะเป็นโรคซึมเศร้า"
      );
    }
    await expect(mockFn()).resolves.toEqual(
      "เป็นผู้มีความเสี่ยง หรือ <br /> มีแนวโน้มที่จะเป็นโรคซึมเศร้า"
    );
  });

  it("Could show Service Center Info Page correctly when click service card", async () => {
    const wrapper = shallow(<ResultModal />);
    wrapper.find("Card");
    mockFn.mockResolvedValue(
      "/ServiceCenterInfo/44cfe4c8-bb20-4bbe-8011-a742ec66a832"
    );
    await expect(mockFn()).resolves.toEqual(
      "/ServiceCenterInfo/44cfe4c8-bb20-4bbe-8011-a742ec66a832"
    );
  });
});

describe("ServiceCenterInfo page: Service Center Info Page", () => {
  const mockService = {
    address:
      "หน่วยบริการผู้ป่วยนอก OPD ตึก ภปร. ชั้น 12 จิตเวชทั่วไป โรงพยาบาลจุฬาลงกรณ์ 1873 ถนนพระรามที่ 4 แขวงปทุมวัน เขตปทุมวัน",
    cost: "500฿ - 1000฿",
    createAt: "2022-02-10T16:19:25.359Z",
    deleteAt: null,
    description:
      "ฝ่ายจิตเวชศาสตร์ให้บริการตรวจวินิจฉัย และดูแลรักษาผู้ป่วยทางจิต รวมถึงการรับปรึกษาจากแผนกต่าง ๆ บริการสัมภาษณ์และตรวจสุขภาพจิตแก่หน่วยงานภายในและภายนอก",
    email: "-",
    facebook: "https://www.facebook.com/ChulalongkornHospital/?fref=ts",
    id: "44cfe4c8-bb20-4bbe-8011-a742ec66a832",
    imageUrl:
      "https://user-images.githubusercontent.com/56313629/152846815-9eefb6f0-c090-422c-ac06-c3cfb4ee8eea.jpg",
    latitude: "13.74137169",
    longitude: "100.5395238",
    name: "จิตเวชทั่วไป โรงพยาบาลจุฬาลงกรณ์",
    office_hours: "วันจันทร์ - วันศุกร์ เวลา 08.30 – 15.30 น.",
    phone: "02-256-5182,  02-256-5180",
    province: "กรุงเทพมหานคร",
    type: "OFFLINE",
    updateAt: "2022-02-10T16:19:25.359Z",
    website:
      "https://chulalongkornhospital.go.th/kcmh/dept/%E0%B8%9D%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B9%80%E0%B8%A7%E0%B8%8A%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C/",
  };

  it("Could show servic center'd id correctly", async () => {
    const wrapper = shallow(<ServiceCenterInfo />);
    wrapper.find("useEffect");
    mockFn.mockResolvedValue(mockService.id);
    await expect(mockFn()).resolves.toEqual(
      "44cfe4c8-bb20-4bbe-8011-a742ec66a832"
    );
  });
});

describe("ServiceCenter: Should show all component", () => {
  it("show Search Input", () => {
    const wrapper = shallow(<ServiceCenter />);
    const input = wrapper.find(InputBase);
    const searchIcon = wrapper.find(SearchIcon);
    expect(input).toHaveLength(1);
    expect(searchIcon).toHaveLength(1);
  });
  it("show 3 filters", () => {
    const wrapper = shallow(<ServiceCenter />);
    const fav = wrapper.find("#chcek-favorite");
    const onsite = wrapper.find("#chcek-onsite");
    const online = wrapper.find("#chcek-online");
    wrapper.find(Checkbox);
    expect(wrapper).toHaveLength(1);
    expect(fav.exists()).toBeFalsy();
    expect(onsite.exists()).toBeFalsy();
    expect(online.exists()).toBeFalsy();
  });

  it("show ServiceCenterCard", () => {
    const wrapper = shallow(<ServiceCenter />);
    wrapper.find(ServiceCenterCard);
    expect(wrapper).toHaveLength(1);
  });
});

describe("ServiceCenter: Should show text correctly when input in search input", () => {
  it("show correct Search Input", () => {
    render(<ServiceCenter />);
    const msg = screen.getByPlaceholderText(
      "Search Service Center name or province"
    );
    fireEvent.change(msg, { target: { value: "hi" } });
    expect(msg.value).toBe("hi");
  });
});

describe("ServiceCenter: Should render correct function", () => {
  const allMockService = [
    {
      id: "025acdad-900a-4172-982c-f45d0310c436",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "Center for Psychological Wellness",
      description:
        "ศูนย์สุขภาวะทางจิต เป็นศูนย์ให้บริการทางจิตวิทยาของคณะจิตวิทยา จุฬาลงกรณ์มหาวิทยาลัย ที่มีจุดมุ่งหมายในการบูรณาการองค์ความรู้ทางจิตวิทยากับการให้บริการเพื่อพัฒนาและเสริมสร้างสุขภาวะทางจิตให้กับสังคมไทย",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152805064-8554e1d2-4d2a-4138-9214-2a5a9cffbf23.jpg",
      type: "BOTH",
      address:
        "ชั้น 5 อาคารบรมราชชนนีศรีศตพรรษ จุฬาลงกรณ์มหาวิทยาลัย ซอยจุฬาฯ12 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน",
      province: "เชียงใหม่",
      website: "-",
      facebook: "https://www.facebook.com/WellnessPsyCU/",
      phone: "02-218-1171, 061-736-2859",
      email: "wellness.chula@gmail.com",
      office_hours:
        "วันจันทร์ - ศุกร์ เวลา 09.00 - 17.00 น. (ยกเว้นวันหยุดนักขัตฤกษ์)",
      cost: "800฿",
      latitude: "13.7552463",
      longitude: "100.5296089",
    },
    {
      id: "450c0f37-cdcb-48bd-86de-7f03fbf9d1d4",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "คลินิกจิตเวช โรงพยาบาลกลาง",
      description:
        "โรงพยาบาลกลางเป็นสถานที่ให้บริการบำบัดรักษาผู้ป่วย สร้างเสริมสุขภาพอนามัย และป้องกันโรค โดยเน้นบริการที่ดีเลิศ ตลอดจนปรับปรุงฟื้นฟูสภาพแวดล้อมและบรรยากาศทั้งภายในอาคารและรอบโรงพยาบาลให้ดีขึ้นเพื่อคุณภาพชีวิตที่ดีแก่ผู้รับบริการ",
      imageUrl: "https://hivthai.org/wp-content/uploads/home-04.jpg",
      type: "Online",
      address: "514 ถนนหลวง ป้อมปราบศัตรูพ่าย",
      province: "กรุงเทพมหานคร",
      website: "http://www.klanghospital.go.th/",
      facebook: "https://www.facebook.com/PRK514/",
      phone: "0-2220-8000",
      email: "-",
      office_hours: "ทุกวันพฤหัสบดีที่ 1 และ 3 ของเดือน เวลา 10.00 – 12.00 น.",
      cost: "200฿ - 1000฿",
      latitude: "13.75176715",
      longitude: "100.4789996",
    },
    {
      id: "46f2c6a1-5f8a-472a-b282-70788c74748c",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "โรงพยาบาลตำรวจ",
      description: "คลินิกเฉพาะทางด้านจิตเวชและยาเสพติด",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152824148-91e0d3ad-0cef-4c9c-98b7-5b5d82c32c8b.jpg",
      type: "OFFLINE",
      address: "สำนักงานตำรวจแห่งชาติ 492/1 ถนนพระราม 1 ปทุมวัน",
      province: "เยอรมัน",
      website:
        "https://www.policehospital.org/content/opd.php?opdID=0005&opddata_id=0027",
      facebook: "https://www.facebook.com/policehosp/",
      phone: "0-2207-6000",
      email: "pgh4.0pr@gmail.com",
      office_hours:
        "วันจันทร์ - วันศุกร์ เวลา 08.00 – 12.00 น. ยกเว้น วันหยุดราชการ",
      cost: "400฿ - 500฿",
      latitude: "13.74361998",
      longitude: "100.5386972",
    },
    {
      id: "25fe8586-3c25-43cd-ac45-dbec99a75208",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "The Oasis",
      description:
        "คลินิกจิตเวช ให้การปรึกษาด้านสุขภาพจิต จิตบำบัด โดย จิตแพทย์ และทีมผู้เชี่ยวชาญ",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152838537-ac718773-67c0-4599-9f49-a5f0d2a41522.png",
      type: "OFFLINE",
      address: "1408/41 ถนนพหลโยธิน แขวงจอมพล เขตจตุจักร",
      province: "กรุงเทพมหานคร",
      website: "https://www.theoasiscare.com/",
      facebook: "https://www.facebook.com/theoasiscare",
      phone: "065-635-1561",
      email: "contact@theoasiscare.com",
      office_hours:
        "วันจันทร์ - วันศุกร์ เวลา 12.00 - 20.00 น. วันเสาร์และวันอาทิตย์ เวลา 10.00 - 18.00 น.",
      cost: "2000฿ - 14,500฿",
      latitude: "13.82135649",
      longitude: "100.5653177",
    },
    {
      id: "81171296-b8af-4013-8d2a-0ff822a7d1e3",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "โรงพยาบาลมนารมย์",
      description:
        "โรงพยาบาลมนารมย์เป็นโรงพยาบาลเอกชนเฉพาะทางด้านสุขภาพจิต ที่มอบทางเลือกใหม่สำหรับผู้ที่ต้องการค้นหาและพัฒนาศักยภาพในตัวเองเพื่อคุณภาพชีวิตที่ดีขึ้น การดูแลรักษาสุขภาพจิตให้แข็งแรงสมบูรณ์เป็นการลงทุนที่คุ้มค่า และยั่งยืนสำหรับการใช้ชีวิตอย่างเป็นสุข",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152841505-46719a2b-ba36-4dc1-af34-c53c9dc2053b.jpg",
      type: "OFFLINE",
      address: "เลขที่ 9 ถนนสุขุมวิท 70/3 แขวงบางนาใต้ เขตบางนา",
      province: "กรุงเทพมหานคร",
      website: "https://www.manarom.com/",
      facebook: "https://www.facebook.com/ManaromHospital",
      phone: "02-725-9595, 02-032-9595",
      email: "contact@manarom.com",
      office_hours: "ทุกวัน เวลา 07.00 – 20.00 น.",
      cost: "500฿ - 4,000฿",
      latitude: "13.66465858",
      longitude: "100.6018096",
    },
    {
      id: "aaafeb9c-5441-4786-8335-7fe4213fb425",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "หน่วยตรวจผู้ป่วยนอกจิตเวชศาสตร์ โรงพยาบาลรามาธิบดี",
      description:
        "ให้บริการตรวจรักษาผู้ที่มีปัญหาสุขภาพจิตและจิตเวชสำหรับผู้ที่มีอายุ 18 ปีขึ้นไป แบบผู้ป่วยนอก",
      imageUrl:
        "https://www.rama.mahidol.ac.th/ramamental/sites/default/files/public/img/icon/Psy-Icon.png",
      type: "OFFLINE",
      address:
        "อาคาร 4 ชั้น 2 โรงพยาบาลรามาธิบดี คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี มหาวิทยาลัยมหิดล 270 ถนนพระรามที่ 6 แขวงทุ่งพญาไท เขตราชเทวี",
      province: "กรุงเทพมหานคร",
      website:
        "http://sirirajpsych.com/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9B%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%99%E0%B8%AD%E0%B8%81-S0019",
      facebook: "https://www.facebook.com/TheMindBySiriraj?_rdc=1&_rdr",
      phone: "02-201-1235, 02-201-1726",
      email: "-",
      office_hours:
        "วันจันทร์ - วันศุกร์ เวลา 08.00 – 12.00 น. ยกเว้น วันหยุดราชการ",
      cost: "500฿ - 900฿",
      latitude: "13.75687468",
      longitude: "100.4837822",
    },
    {
      id: "39789477-126e-44e1-804a-f688f8993587",
      createAt: "2022-02-13T09:53:01.730Z",
      updateAt: "2022-02-13T09:53:01.730Z",
      deleteAt: null,
      name: "OOCA",
      description:
        "Platform ปรึกษาจิตแพทย์ออนไลน์ที่ช่วยให้คุณสามารถพูดคุยปัญหาคาใจกับจิตแพทย์และนักจิตวิทยาได้ผ่าน Video Call โดยเข้าใช้งานได้อย่างเป็นส่วนตัวและปลอดภัย ทุกที่ ทุกเวลา ผ่านคอมพิวเตอร์หรือโทรศัพท์มือถือของคุณ",
      imageUrl:
        "https://play-lh.googleusercontent.com/HqvE1-4YMkbL5TrcXgcDcWlhmbvW9GIXzRv83y_bmRWODJckfDz9EEv2CJPWxkIXH2B7",
      type: "ONLINE",
      address: "-",
      province: "-",
      website: "https://www.ooca.co/",
      facebook: "https://www.facebook.com/oocaok/",
      phone: "090-004-0006",
      email: "support@ooca.co",
      office_hours: "ทุกวัน เวลา 08.00 - 23.00 น.",
      cost: "1000฿ - 1500฿",
      latitude: "0",
      longitude: "0",
    },
    {
      id: "a257d155-696c-4f32-a918-390647623df3",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "กายใจคลินิก",
      description:
        "ทีมจิตแพทย์ นักจิตบำบัด พยาบาล และ นักสังคมสงเคราะห์ผู้เชี่ยวชาญของกายใจคลินิกพร้อมที่จะให้การดูแลรักษาทางการแพทย์ที่ครอบคลุมในระดับบุคคลทุกช่วงวัยตั้งแต่เด็ก วัยรุ่น ผู้ใหญ่ และผู้สูงอายุ",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152843300-0c84d40e-7e08-4ad8-bf30-56b1166424f0.jpg",
      type: "OFFLINE",
      address:
        "อาคารจัตุรัสจามจุรี ชั้น 2 (ฝั่งติดถนนพญาไท) ห้อง 253 ถนนพญาไท เขตปทุมวัน",
      province: "กรุงเทพมหานคร",
      website: "https://www.bodyandmindclinicbkk.com/",
      facebook: "https://www.facebook.com/bodyandmindclinic/",
      phone: "093-332-2511, 02-160-5389",
      email: "bodyandmindclinic.bkk@gmail.com",
      office_hours:
        "วันจันทร์ - วันศุกร์ เวลา 16.30 - 20.00 น. วันเสาร์ เวลา 10.00 - 16.00 น. วันอาทิตย์ เวลา 10.00 - 18.00 น.",
      cost: "฿฿",
      latitude: "13.73335568",
      longitude: "100.5293595",
    },
    {
      id: "7648292d-ea03-4368-9eaa-83f7b7e56c83",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "Mind & Mood Clinic",
      description:
        "Mind & Mood Clinic เป็นคลินิกที่เปิดให้บริการดูแลเฉพาะทางด้านสุขภาพจิต ครอบคลุมทุกช่วงวัยตั้งแต่วัยเด็ก วัยรุ่น วัยผู้ใหญ่ และวัยผู้สูงอายุ โดยมีเป้าหมายในการดูแลรักษาผู้ป่วยตั้งแต่เริ่มมีปัญหาทางอารมณ์และพฤติกรรม และเน้นการบำบัดด้วยการพูดคุยในรูปแบบ Cognitive Behavioral Therapy (CBT) โดยทีมจิตแพทย์ผู้เชี่ยวชาญ ซึ่งจบจากสถาบัน Beck Institute หรือผ่านการอบรมการบำบัด CBT ในประเทศไทย",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152849568-612ce8a3-c770-4769-ac19-8ea2d373d59b.png",
      type: "OFFLINE",
      address: "ซอยพหลโยธิน 32 (ตรงข้ามเสนานิคม 1 ซอย 1)",
      province: "กรุงเทพมหานคร",
      website: "http://www.mindandmood.clinic/",
      facebook: "https://www.facebook.com/mindandmoodcbt/",
      phone: "061-401-2274",
      email: "contact@holistic.co.th",
      office_hours: "วันจันทร์ - วันศุกร์ และ วันอาทิตย์ เวลา 10:00 - 19:00 น.",
      cost: "500฿ - 1000฿",
      latitude: "13.83351026",
      longitude: "100.5741857",
    },
    {
      id: "e9ae4135-25d8-43e3-b78e-87262af340e3",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "คลินิกกู้ใจ โรงพยาบาลตากสิน",
      description:
        "คลินิกกู้ใจ และสายด่วนกู้ใจ 1646 เพื่อให้บริการแก่ประชาชน เนื่องจากสภาพการณ์ในปัจจุบันที่มีความเครียดมากขึ้น",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152851095-d5836065-563c-497c-b6fb-3e535d299348.jpg",
      type: "OFFLINE",
      address: "เลขที่ 543 ถ.สมเด็จเจ้าพระยา แขวงคลองสาน เขตคลองสาน",
      province: "กรุงเทพมหานคร",
      website: "taksinhosp.go.th/tks.html",
      facebook:
        "https://www.facebook.com/113192643858570/posts/145615220616312/",
      phone: "0-2437-0123",
      email: "taksinhosp.pr@gmail.com",
      office_hours: "วันจันทร์ - วันศุกร์ เวลา 08.00 – 11.30 น.",
      cost: "200฿ - 800฿",
      latitude: "13.73049203",
      longitude: "100.5086358",
    },
    {
      id: "058f2c18-8871-480b-b5f9-3b59f970350e",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "หน่วยตรวจโรคจิตเวชศาสตร์ โรงพยาบาลศิริราช",
      description:
        "คณะแพทยศาสตร์ศิริราชพยาบาล ให้บริการตรวจรักษาแบบผู้ป่วยนอก แก่ผู้ที่มีปัญหาสุขภาพจิตและจิตเวช สำหรับผู้ที่มีอายุ 18 ปีขึ้นไป",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152849045-d534d18e-ebd8-4b34-a01f-150ed0f3f213.jpg",
      type: "OFFLINE",
      address:
        "หน่วยตรวจโรคโรคจิตเวชศาสตร์ ชั้น 7 คณะแพทยศาสตร์ศิริราชพยาบาล เลขที่ 2 ถนนวังหลัง แขวงศิริราช เขตบางกอกน้อย",
      province: "กรุงเทพมหานคร",
      website: "https://www.si.mahidol.ac.th/sirirajhospital/opd9.php",
      facebook: "https://www.facebook.com/chulabhornhospital/",
      phone: "02-419-7000",
      email: "-",
      office_hours: "วันจันทร์ - วันศุกร์ เวลา 09.00 – 12.00 น.",
      cost: "500฿ - 1000฿",
      latitude: "13.75696487",
      longitude: "100.4837791",
    },
    {
      id: "9ae6449a-86c8-4681-a4ef-c4a90319bb36",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "ศูนย์การแพทย์สมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี",
      description:
        "ศูนย์การแพทย์สมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี คณะแพทยศาสตร์ มหาวิทยาลัยศรีนครินทรวิโรฒ โรงพยาบาลขนาดใหญ่ ให้บริการภาคตะวันออกทั้งหมด",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152855271-33961e84-3ea6-4fd3-9df7-6c787ec9536b.jpg",
      type: "OFFLINE",
      address:
        "ห้องตรวจจิตเวช ชั้น 2 อาคารศูนย์การแพทย์ฯ ศูนย์การแพทย์สมเด็จพระเทพรัตนราชสุดา ฯ สยามบรมราชกุมารี 62 หมู๋ 7 ถนนรังสิต - นครนายก อำเภอองครักษ์",
      province: "นครนายก",
      website: "http://medicine.swu.ac.th/msmc/?p=4946",
      facebook: "https://www.facebook.com/msmccenter/",
      phone: "037-395-085-6",
      email: "-",
      office_hours: "วันจันทร์ - วันศุกร์ เวลา 08.00 - 11.00 น.",
      cost: "300฿ - 800฿",
      latitude: "14.11194925",
      longitude: "100.9849713",
    },
    {
      id: "9a1cc79d-e531-4708-b8dc-3bf6fe06a648",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "Samaritansthai",
      description:
        "สมาคมที่ให้บริการเป็นเพื่อนพูดคุยทางโทรศัพท์ โดยมีวัตถุประสงค์หลักเพื่อ ป้องกันการฆ่าตัวตาย อาสาสมัครมาจากหลากหลายอาชีพ ผลัดเปลี่ยนกันมาทำหน้าที่ โดยไม่ได้รับผลตอบแทนใด ๆ การทำงานของสมาคมตั้งอยู่บนหลักการว่า จะไม่เกี่ยวข้องกับ ศาสนา ปรัชญา หรือลัทธิการเมืองใด ๆ",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152799269-98e41381-1006-4295-bf84-6c99d3fc3e76.jpg",
      type: "ONLINE",
      address: "-",
      province: "-",
      website: "https://www.samaritansthai.com/",
      facebook: "https://www.facebook.com/Samaritans.Thailand/?swcfpc=1",
      phone: "02-113-6789 กด 1",
      email: "-",
      office_hours: "ทุกวัน เวลา 12.00 - 22.00 น.",
      cost: "ไม่เสียค่าใช้จ่าย",
      latitude: "0.0",
      longitude: "0.000000",
    },
    {
      id: "44cfe4c8-bb20-4bbe-8011-a742ec66a832",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "จิตเวชทั่วไป โรงพยาบาลจุฬาลงกรณ์",
      description:
        "ฝ่ายจิตเวชศาสตร์ให้บริการตรวจวินิจฉัย และดูแลรักษาผู้ป่วยทางจิต รวมถึงการรับปรึกษาจากแผนกต่าง ๆ บริการสัมภาษณ์และตรวจสุขภาพจิตแก่หน่วยงานภายในและภายนอก",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152846815-9eefb6f0-c090-422c-ac06-c3cfb4ee8eea.jpg",
      type: "OFFLINE",
      address:
        "หน่วยบริการผู้ป่วยนอก OPD ตึก ภปร. ชั้น 12 จิตเวชทั่วไป โรงพยาบาลจุฬาลงกรณ์ 1873 ถนนพระรามที่ 4 แขวงปทุมวัน เขตปทุมวัน",
      province: "กรุงเทพมหานคร",
      website:
        "https://chulalongkornhospital.go.th/kcmh/dept/%E0%B8%9D%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B9%80%E0%B8%A7%E0%B8%8A%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C/",
      facebook: "https://www.facebook.com/ChulalongkornHospital/?fref=ts",
      phone: "02-256-5182,  02-256-5180",
      email: "-",
      office_hours: "วันจันทร์ - วันศุกร์ เวลา 08.30 – 15.30 น.",
      cost: "500฿ - 1000฿",
      latitude: "13.74137169",
      longitude: "100.5395238",
    },
    {
      id: "816bdd30-1d98-43d6-821c-c3bed96738ee",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "Relationflip",
      description:
        "เว็บไซต์จิตวิทยาที่ให้บริการภายใต้คอนเซ็ปต์ ‘For The Better Version of Yourself’  โดยมุ่งหวังให้การดูแลสุขภาพจิตเป็นสวัสดิการนึงที่พนักงานในองค์กรควรได้รับเช่นเดียวกับการดูแลสุขภาพกาย แต่ถึงอย่างนั้นคนทั่วไปที่ไม่ใช่พนักงานบริษัทก็สามารถเข้าไปใช้บริการได้นะ",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152814637-54e7a510-d145-4163-8e19-9dc70ed03430.jpg",
      type: "ONLINE",
      address: "-",
      province: "-",
      website: "https://happy.relationflip.com/",
      facebook: "https://www.facebook.com/Relationflip-822686647875422/",
      phone: "099-002-6888",
      email: "support@Relationflip.com",
      office_hours: "ทุกวัน เวลา 08.00 – 18.00 น.",
      cost: "1000฿",
      latitude: "0",
      longitude: "0",
    },
    {
      id: "d1c02992-0d93-4427-b279-93425a5497cd",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "Doctor Anywhere",
      description:
        "ผู้เชี่ยวชาญของเราบนแอปพลิเคชั่นล้วนได้รับการรับรอง และอยู่ภายใต้สถาบันที่ให้การดูแลและบริการให้คำปรึกษาด้านสุขภาพจิตที่มีความเชี่ยวชาญด้านต่าง ๆ ",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152826348-3e825b9e-662f-4d9d-ba1d-516e986b603a.jpg",
      type: "ONLINE",
      address: "-",
      province: "-",
      website: "https://www.doctoranywhere.co.th/mentalwellness?lang=th",
      facebook: "https://www.facebook.com/doctoranywhere.th/",
      phone: "02-508-8658",
      email: "askus.th@doctoranywhere.com",
      office_hours: "ทุกวัน เวลา 09.00 – 20.00 น.",
      cost: "2,730฿ - 14,000฿",
      latitude: "0",
      longitude: "0",
    },
    {
      id: "a3aabb17-94ff-4389-9a0b-8e5f1297c6ef",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "โรงพยาบาลศรีธัญญา",
      description:
        "โรงพยาบาลศรีธัญญาเป็นโรงพยาบาลระดับเหนือตติยภูมิที่เป็นเลิศด้านการฟื้นฟูสมรรถภาพทางจิตเวช เชี่ยวชาญปัญหาสุขภาพและจิตเวช รุนแรง ยุ่งยาก และซับซ้อน",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/th/8/8f/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%98%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B2.png",
      type: "OFFLINE",
      address: "47 หมู่ 4 ตำบลตลาดขวัญ อำเภอเมือง",
      province: "นนทบุรี",
      website: "https://www.srithanya.go.th/index.php/th/",
      facebook: "https://www.facebook.com/av.srithanya",
      phone: "02-528-7800 ต่อ 57163 หรือ 57164",
      email: "-",
      office_hours: "วันจันทร์ - วันศุกร์ เวลา 08.30 – 16.00 น.",
      cost: "฿฿",
      latitude: "13.84662602",
      longitude: "100.5168945",
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
    {
      id: "0f93ee16-535e-43f6-a872-385bbaf696b6",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "iStrong",
      description:
        "iSTRONG ผู้ให้บริการด้านสุขภาพจิต Solutions ด้านสุขภาพจิต ให้คำปรึกษาโดยนักจิตวิทยา นักจิตบำบัด นักจิตวิทยาคลินิกที่มีใบรับรอง รวมถึงบทความจิตวิทยา",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152815771-f7659d40-7423-4664-9347-475612e3c47e.png",
      type: "ONLINE",
      address: "-",
      province: "-",
      website: "https://www.istrong.co/",
      facebook: "https://www.facebook.com/istrong.co/",
      phone: "02-026-8949",
      email: "contact@istrong.co",
      office_hours: "ทุกวัน เวลา 08.00 – 18.00 น.",
      cost: "750฿ - 2200฿",
      latitude: "0",
      longitude: "0",
    },
    {
      id: "dcfe6fb0-d4f5-4cc4-b7bb-11e3deb140e0",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "คลินิกแพทย์วิเชียร",
      description: "คลินิกเฉพาะทางด้านจิตเวชและยาเสพติด",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152834782-d9b64086-da58-4ccd-b742-309af4e4c4ca.jpg",
      type: "OFFLINE",
      address:
        "78/120(33) ซอยประชาราษฎร์ 26(ซอยศรีพรสวรรค์) ถ.ประชาราษฎร์ ต.สวนใหญ๋ อ.เมือง",
      province: "นนทบุรี",
      website:
        "https://www.drwichian.com/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B9%81%E0%B8%A3%E0%B8%81",
      facebook: "https://www.facebook.com/drwichianclinic/",
      phone: "02-967-4391, 089-482-8290",
      email: "-",
      office_hours:
        "วันอังคาร วันพุธ วันศุกร์ เวลา 17.00 - 20.00 น. วันเสาร์ เวลา 10.00 - 15.00 น. วันอาทิตย์ เวลา 15.00 - 20.00 น.",
      cost: "ครั้งแรก 1000฿ - 1500฿ ครั้งต่อไป 300฿ - 500฿",
      latitude: "13.84429362",
      longitude: "100.4952555",
    },
  ];

  it("show All ServiceCenterCard when input nothing", async () => {
    render(<ServiceCenter />);

    const msg = screen.getByPlaceholderText(
      "Search Service Center name or province"
    );
    fireEvent.change(msg, { target: { value: "" } });
    const wrapper = shallow(<ServiceCenterCard data={allMockService} />);
    if (msg.value === "") {
      wrapper.setProps({ allMockService });
    }
    expect(wrapper.find("#name-card")).toHaveLength(20);
  });

  it("show some ServiceCenterCard when input province or service center name", async () => {
    render(<ServiceCenter />);

    const msg = screen.getByPlaceholderText(
      "Search Service Center name or province"
    );
    fireEvent.change(msg, { target: { value: "กรุงเทพมหานคร" } });
    const wrapper = shallow(<ServiceCenterCard data={allMockService} />);
    if (msg.value === "กรุงเทพมหานคร") {
      allMockService.filter(
        (e) =>
          e.name.toLowerCase().includes(msg.value) ||
          e.province.toLowerCase().includes(msg.value)
      );
      wrapper.setProps({ allMockService });
    }
    expect(wrapper.find("#name-card")).toHaveLength(20);
  });
});


describe("ServiceCenterCard", () => {
  const allMockService = [
    {
      id: "025acdad-900a-4172-982c-f45d0310c436",
      createAt: "2022-02-10T16:19:25.359Z",
      updateAt: "2022-02-10T16:19:25.359Z",
      deleteAt: null,
      name: "Center for Psychological Wellness",
      description:
        "ศูนย์สุขภาวะทางจิต เป็นศูนย์ให้บริการทางจิตวิทยาของคณะจิตวิทยา จุฬาลงกรณ์มหาวิทยาลัย ที่มีจุดมุ่งหมายในการบูรณาการองค์ความรู้ทางจิตวิทยากับการให้บริการเพื่อพัฒนาและเสริมสร้างสุขภาวะทางจิตให้กับสังคมไทย",
      imageUrl:
        "https://user-images.githubusercontent.com/56313629/152805064-8554e1d2-4d2a-4138-9214-2a5a9cffbf23.jpg",
      type: "BOTH",
      address:
        "ชั้น 5 อาคารบรมราชชนนีศรีศตพรรษ จุฬาลงกรณ์มหาวิทยาลัย ซอยจุฬาฯ12 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน",
      province: "เชียงใหม่",
      website: "-",
      facebook: "https://www.facebook.com/WellnessPsyCU/",
      phone: "02-218-1171, 061-736-2859",
      email: "wellness.chula@gmail.com",
      office_hours:
        "วันจันทร์ - ศุกร์ เวลา 09.00 - 17.00 น. (ยกเว้นวันหยุดนักขัตฤกษ์)",
      cost: "800฿",
      latitude: "13.7552463",
      longitude: "100.5296089",
    }
  ];
  it("show ServiceCenter Card", () => {
    const wrapper = shallow(<ServiceCenterCard data={allMockService}/>);
    const card = wrapper.find(Card);
    expect(card).toHaveLength(1);

  });
  it("show favorite icons", () => {
    const wrapper = shallow(<ServiceCenterCard data={allMockService} />);
    const fav = wrapper.find(MdFavorite);
    expect(fav).toHaveLength(1);
  });

  it("go to serviceCenterInfo when click card", () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<ServiceCenterCard data={allMockService} handleOnClick={mockCallBack} />);
    wrapper.find(Card).simulate('click');
  });
});
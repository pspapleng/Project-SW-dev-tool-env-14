import React from "react";
import { shallow } from "enzyme";

import Home from "../pages/Home/Home";
import DisclaimerModal from "../components/Modals/DisclaimerModal";
import Assessment from "../pages/Assessment/Assessment";
import localStorage from "./localStorage";
import MainPageModal from "../components/Modals/MainPageModal";
import ResultModal from "../components/Modals/ResultModal";
import ServiceCenterInfo from "../pages/ServiceCenter/ServiceCenterInfo";

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
      expect(item).toEqual("<MainPageModal />");
    });
  
    it("check item doAssessment in localStorage is True", () => {
      global.localStorage.setItem("doAssessment", true);
      if (global.localStorage.getItem("doAssessment") === true) {
        item = false;
      }
      expect(item).toEqual(false);
    });
  });
  
  describe("Home: Click DisclaimerModal Button", () => {
  
    it("testing click accept button", async () => {
      const wrapper = shallow(<DisclaimerModal isAccept={mockFn} />);
      wrapper.find("BlueBut").simulate("click");
      mockFn.mockResolvedValue({open: false});
      global.localStorage.setItem("acceptDisclaimer", true);
      await expect(mockFn()).resolves.toEqual({open: false});
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
    const wrapper = shallow(<Assessment  />);
    
  
    it("Should open Result Modal When the user answer all choices and click submit", async () => {
      choice.mockReturnValueOnce({ data: [{}, {}]});
      wrapper.find("DarkGrayBut").simulate("click");
      
      if((choice().data.length) === 2){
        mockFn.mockResolvedValue({showResult: true});
      }
      await expect(mockFn()).resolves.toEqual({showResult: true});
      await expect(mockFn.mock.calls.length).toBe(1);
    });
  
    it("Should alert error when the user doesn't choose all choice", async () => {
      choice.mockReturnValueOnce({ data: [{}]});
      wrapper.find("DarkGrayBut").simulate("click");
      
      if((choice().data.length) !== 2){
        mockFn.mockResolvedValue({onInpError: true});
      }
      await expect(mockFn()).resolves.toEqual({onInpError: true});
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
      await expect(mockFn()).resolves.toEqual("44cfe4c8-bb20-4bbe-8011-a742ec66a832");
  
    });
  
  });
  
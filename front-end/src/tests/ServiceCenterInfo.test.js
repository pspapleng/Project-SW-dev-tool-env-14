import React from "react";
import { shallow} from "enzyme";
import localStorage from "./localStorage";
import ServiceCenterInfo from "../pages/ServiceCenter/ServiceCenterInfo";

let mockFn = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe("Service Center Info Page", () => {
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

import React from "react";
import { shallow } from "enzyme";

import "@testing-library/jest-dom";

import ServiceCenterInfo from "../pages/ServiceCenter/ServiceCenterInfo";
import ResultModal from "../components/Modals/ResultModal";

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

// describe("get correct page (Home -> Assessment -> ServiceCenterInfo) and get API getServiceCenterByLocation", () => {
//   const mockgetServiceCenterByLocation = {
//     id: "31a26fa9-55db-4059-b4a3-4c59de3f9b5b",
//     createAt: "2022-02-10T16:19:25.359Z",
//     updateAt: "2022-02-10T16:19:25.359Z",
//     deleteAt: null,
//     name: "OneManCounselor",
//     description:
//       "ปรึกษาปัญหาชีวิตกับนักจิตวิทยา เพื่อเข้าใจสาเหตุของปัญหาที่แท้จริง จนสามารถปรับวิธีคิด และปรับแนวทางการใช้ชีวิตให้ลงตัวยิ่งขึ้น คลี่คลายปัญหาภายในจิตใจ และกลับมามีความสุขอีกครั้ง",
//     imageUrl:
//       "https://341682-1054383-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/OneManCounselor.jpg",
//     type: "BOTH",
//     address:
//       "อาคารวนาเพลส ชั้น1 (ฝั่งลานจอดรถด้านข้างอาคาร) \nซอยอยู่เจริญ16 ถนนรัชดาภิเษก (ซอยรัชดาภิเษก3) เขตดินแดง",
//     province: "กรุงเทพมหานคร",
//     website: "https://www.onemancounselor.com/",
//     facebook: "https://www.facebook.com/onemancounselor",
//     phone: "-",
//     email: "onemancounselor@gmail.com",
//     office_hours:
//       "ทุกวัน ตามการนัดหมายที่สะดวก พบตัว (งดปรึกษาพบตัวชั่วคราวในช่วงสถานการณ์โควิด) เวลา 10.00 – 18.00 น. โทรศัพท์ เวลา 10.00 – 20.00 น. ออนไลน์(วิดีโอคอล หรือแชท) เวลา 10.00 – 20.00 น.",
//     cost: "1300฿ - 3000฿",
//     latitude: "13.77396306",
//     longitude: "100.5651552",
//   };

//   it("get correct address info by API getServiceCenterByLocation", async () => {
//     const wrapper = shallow(<ServiceCenterInfo />);
//     wrapper.find("address");
//     mockFn.mockResolvedValue(mockgetServiceCenterByLocation.address);
//     await expect(mockFn()).resolves.toEqual(
//       "อาคารวนาเพลส ชั้น1 (ฝั่งลานจอดรถด้านข้างอาคาร) \nซอยอยู่เจริญ16 ถนนรัชดาภิเษก (ซอยรัชดาภิเษก3) เขตดินแดง"
//     );
//   });

//   it("get correct office_hours info by API getServiceCenterByLocation", async () => {
//     const wrapper = shallow(<ServiceCenterInfo />);
//     wrapper.find("office_hours");
//     mockFn.mockResolvedValue(mockgetServiceCenterByLocation.office_hours);
//     await expect(mockFn()).resolves.toEqual(
//       "ทุกวัน ตามการนัดหมายที่สะดวก พบตัว (งดปรึกษาพบตัวชั่วคราวในช่วงสถานการณ์โควิด) เวลา 10.00 – 18.00 น. โทรศัพท์ เวลา 10.00 – 20.00 น. ออนไลน์(วิดีโอคอล หรือแชท) เวลา 10.00 – 20.00 น."
//     );
//   });

//   it("get correct website info by API getServiceCenterByLocation", async () => {
//     const wrapper = shallow(<ServiceCenterInfo />);
//     wrapper.find("website");
//     mockFn.mockResolvedValue(mockgetServiceCenterByLocation.website);
//     await expect(mockFn()).resolves.toEqual("https://www.onemancounselor.com/");
//   });

//   it("get correct facebook info by API getServiceCenterByLocation", async () => {
//     const wrapper = shallow(<ServiceCenterInfo />);
//     wrapper.find("facebook");
//     mockFn.mockResolvedValue(mockgetServiceCenterByLocation.facebook);
//     await expect(mockFn()).resolves.toEqual(
//       "https://www.facebook.com/onemancounselor"
//     );
//   });

//   it("get correct email info by API getServiceCenterByLocation", async () => {
//     const wrapper = shallow(<ServiceCenterInfo />);
//     wrapper.find("email");
//     mockFn.mockResolvedValue(mockgetServiceCenterByLocation.email);
//     await expect(mockFn()).resolves.toEqual("onemancounselor@gmail.com");
//   });
//   it("get correct cost info by API getServiceCenterByLocation", async () => {
//     const wrapper = shallow(<ServiceCenterInfo />);
//     wrapper.find("cost");
//     const asyncMock = jest
//       .fn()
//       .mockResolvedValue(mockgetServiceCenterByLocation.cost);
//     await expect(asyncMock()).resolves.toEqual("1300฿ - 3000฿");
//   });

//   it("get correct name info by API getServiceCenterByLocation", async () => {
//     const wrapper = shallow(<ServiceCenterInfo />);
//     wrapper.find("name");
//     const check = jest.fn();
//     mockFn.mockReturnValue(check);
//     check.mockResolvedValue(mockgetServiceCenterByLocation.name);
//     await expect(check()).resolves.toEqual("OneManCounselor");
//   });
// });

  describe("get correct id from assessment to service center", () => {
    const mockgetServiceCenterById = {
        id: "31a26fa9-55db-4059-b4a3-4c59de3f9b5b",
        createAt: "2022-02-10T16:19:25.359Z",
        updateAt: "2022-02-10T16:19:25.359Z",
        deleteAt: null,
        name: "OneManCounselor",
        description: "ปรึกษาปัญหาชีวิตกับนักจิตวิทยา เพื่อเข้าใจสาเหตุของปัญหาที่แท้จริง จนสามารถปรับวิธีคิด และปรับแนวทางการใช้ชีวิตให้ลงตัวยิ่งขึ้น คลี่คลายปัญหาภายในจิตใจ และกลับมามีความสุขอีกครั้ง",
        imageUrl: "https://341682-1054383-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/OneManCounselor.jpg",
        type: "BOTH",
        address: "อาคารวนาเพลส ชั้น1 (ฝั่งลานจอดรถด้านข้างอาคาร) \nซอยอยู่เจริญ16 ถนนรัชดาภิเษก (ซอยรัชดาภิเษก3) เขตดินแดง",
        province: "กรุงเทพมหานคร",
        website: "https://www.onemancounselor.com/",
        facebook: "https://www.facebook.com/onemancounselor",
        phone: "-",
        email: "onemancounselor@gmail.com",
        office_hours: "ทุกวัน ตามการนัดหมายที่สะดวก พบตัว (งดปรึกษาพบตัวชั่วคราวในช่วงสถานการณ์โควิด) เวลา 10.00 – 18.00 น. โทรศัพท์ เวลา 10.00 – 20.00 น. ออนไลน์(วิดีโอคอล หรือแชท) เวลา 10.00 – 20.00 น.",
        cost: "1300฿ - 3000฿",
        latitude: "13.77396306",
        longitude: "100.5651552"
    };

    it("get correct id by API mockgetServiceCenterById", async () => {
        // const wrapper = shallow(<ServiceCenterInfo />);
        // wrapper.find("useEffect");
        // mockFn.mockResolvedValue(mockgetServiceCenterById.id);
        // await expect(mockFn()).resolves.toEqual("31a26fa9-55db-4059-b4a3-4c59de3f9b5b");

        const wrapper = shallow(<ServiceCenterInfo />);
        wrapper.find("useEffect");
        const check = jest.fn();
        mockFn.mockReturnValue(check);
        check.mockResolvedValue(mockgetServiceCenterById.id);
        await expect(check()).resolves.toEqual("31a26fa9-55db-4059-b4a3-4c59de3f9b5b");
    });

    it("get correct name by API mockgetServiceCenterById", async () => {
       
        const wrapper = shallow(<ResultModal />);
        wrapper.find("rName");
        const check = jest.fn();
        mockFn.mockReturnValue({});
        const resultM = mockgetServiceCenterById.name
        check.mockResolvedValue(resultM);
        const test = await expect(check()).resolves.toEqual("OneManCounselor");
        console.log(typeof resultM)
    });

});
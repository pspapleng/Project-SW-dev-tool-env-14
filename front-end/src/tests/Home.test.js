import React from "react";
import { shallow, mount } from "enzyme";
import Home, { goAssessment } from "../pages/Home/Home";
import localStorage from "./localStorage";
import { DarkGrayBut } from "../components/Button";
import MainPageModal from "../components/Modals/MainPageModal";

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
test("check lat,lon", () => {
  Object.is(mine, global.navigator.geolocation);
});

// it("test set user location in localstate", () => {
//     // const wrapper = mount(callGeoLocation());
//     // let callGeo = wrapper.find("window.navigator.geolocation");
//     // callGeo = jest.fn().mockResolvedValue({});
//     // expect(callGeo()).toEqual({obj});
//     const localStorageMock = {
//         getItem: jest.fn(),
//         setItem: jest.fn(),
//         clear: jest.fn()
//       };
//       global.localStorage = localStorageMock;
//       expect(localStorage.getItem.mock.calls.length).toBe(1)

//   });
describe("Should show MainPageModal", () => {
  it("check item doAssessment in localStorage is undefined", () => {
    const wrapper = shallow(<Home />);
    wrapper.find("localStorage.getItem");
    let item;
    if (global.localStorage.getItem("doAssessment") === undefined) {
      item = "<MainPageModal />";
    }
    expect(item).toEqual("<MainPageModal />");
    global.localStorage.removeItem("doAssessment");
  });

  it("check item doAssessment in localStorage is True", () => {
    const wrapper = shallow(<Home />);
    wrapper.find("localStorage.getItem");
    global.localStorage.setItem("doAssessment", true);
    let item;
    if (global.localStorage.getItem("doAssessment") === true) {
      item = false;
    }
    expect(item).toEqual(false);
    global.localStorage.removeItem("doAssessment");
  });
});

describe("Click Button navigate to '/Assessment' tests", () => {
  it("testing Make an Assessmwnt click", async () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Home goAssessment={mockFn} />);
    wrapper.find("DarkGrayBut").simulate("click");
    mockFn.mockResolvedValue("/Assessment");
    await expect(mockFn()).resolves.toEqual("/Assessment");
    await expect(mockFn.mock.calls.length).toBe(1);
  });

  it("testing 'Start an Assessment' click", async () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<MainPageModal nextToAssessment={mockFn} />);
    wrapper.find("DarkGrayBut").simulate("click");
    mockFn.mockResolvedValue("/Assessment");
    await expect(mockFn()).resolves.toEqual("/Assessment");
    await expect(mockFn.mock.calls.length).toBe(1);
  });
});

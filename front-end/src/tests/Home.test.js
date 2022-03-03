import React from "react";
import { shallow } from "enzyme";
import Home from "../pages/Home/Home";
import localStorage from "./localStorage";
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

describe("Should show MainPageModal", () => {
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

describe("Click Button navigate to '/Assessment' tests", () => {
  let mockFn = jest.fn();
  afterEach(() => {
    jest.clearAllMocks();
  });

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

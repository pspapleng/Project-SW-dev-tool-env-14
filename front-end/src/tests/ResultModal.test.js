import React from "react";
import { shallow } from "enzyme";
import Assessment from "../pages/Assessment/Assessment";
import ResultModal from "../components/Modals/ResultModal"

describe("Should show ResultModal correctly", () => {
    let item;
    let mockFn = jest.fn();
    // beforeAll(() => {
    //   const wrapper = shallow(<ResultModal />);
    //   wrapper.find("localStorage.getItem");
      
    // });
  
    // afterEach(() => {
    //   global.localStorage.removeItem("doAssessment");
    // });
    
    it("Click 'Back to Home' Button navigate to '/Home' tests", async () => {
        const wrapper = shallow(<ResultModal backToHome={mockFn} />);
        wrapper.find("LightGrayBut").simulate("click");
        mockFn.mockResolvedValue("/");
        await expect(mockFn()).resolves.toEqual("/");
        await expect(mockFn.mock.calls.length).toBe(1);
    });
  
    // it("check item doAssessment in localStorage is True", () => {
    //   global.localStorage.setItem("doAssessment", true);
    //   if (global.localStorage.getItem("doAssessment") === true) {
    //     item = false;
    //   }
    //   expect(item).toEqual(false);
    // });
  
  });
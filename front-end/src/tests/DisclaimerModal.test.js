import React from "react";
import { shallow } from "enzyme";
import localStorage from "./localStorage";
import DisclaimerModal from "../components/Modals/DisclaimerModal";

describe("Click DisclaimerModal Button", () => {
    let mockFn = jest.fn();
    afterEach(() => {
      jest.clearAllMocks();
    });
  
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
  
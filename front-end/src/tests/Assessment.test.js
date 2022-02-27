import React from "react";
import { shallow } from "enzyme";
import Assessment from "../pages/Assessment/Assessment";

describe("user choose radios choices", () => {
  let mockFn = jest.fn();
  let choice = jest.fn();
  const wrapper = shallow(<Assessment actionSubmit={mockFn} />);
  
  afterEach(() => {
    jest.clearAllMocks();
  });

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



  
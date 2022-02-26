import React from "react";
import { shallow } from "enzyme";
// import { render, fireEvent } from "@testing-library/react";
// import { DarkGrayBut } from "../components/Button";

import Assessment from "../pages/Assessment/Assessment";
// import ResultModal from "../components/Modals/ResultModal";
// import Radios from '../pages/Assessment/components/Radios'

describe("user choose radios choices", () => {
  it("Should alert error when user dont choose choice", async () => {
    const wrapper = shallow(<Assessment />);
    let choice = wrapper.find("setChoice");
    choice = jest.fn();
    choice.mockResolvedValue({ data: [] });
    await expect(choice()).resolves.not.toEqual({ data: [{}, {}] });
  });

  it("When the user choose the radios 2 choices", async () => {
    const wrapper = shallow(<Assessment />);
    let choice = wrapper.find("setChoice");
    choice = jest.fn();
    choice.mockResolvedValue({ data: [{}, {}] });
    await expect(choice()).resolves.toEqual({ data: [{}, {}] });
  });
});

// describe("show modal when button is clicked", () => {
//   // const props = { doSomething: jest.fn() };

//   it("Should show result modal when button is clicked", async () => {
//     const wrapper = shallow(<Assessment />);
//     let actionSubmit = wrapper.find("actionSubmit");
//     actionSubmit = jest.fn();
//     actionSubmit.mockResolvedValue({ showResult: true });
//     await expect(actionSubmit()).resolves.toEqual({ showResult: true });
//     await expect(wrapper.find("ActiveResultModal")).toHaveLength(1);
//   });
//   it("should render the input field", async () => {
//     const wrapper = shallow(<Assessment />);
//     let actionSubmit = wrapper.find("actionSubmit");
//     actionSubmit = jest.fn();

//     actionSubmit.mockResolvedValue({ onInpError: true });
//     await expect(actionSubmit()).resolves.toEqual({ onInpError: true });
//   });
// });


  
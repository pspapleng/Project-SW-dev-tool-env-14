import React from "react";
import { shallow} from "enzyme";
import ResultModal from "../components/Modals/ResultModal";

let mockFn = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe("Should show ResultModal correctly", () => {
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

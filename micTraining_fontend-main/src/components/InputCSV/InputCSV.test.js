import React from "react";
import { shallow } from "enzyme";
import InputCSV from "./InputCSV";

describe("InputCSV", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<InputCSV />);
    expect(wrapper).toMatchSnapshot();
  });
});

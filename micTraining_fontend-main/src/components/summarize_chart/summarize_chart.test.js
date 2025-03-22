import React from "react";
import { shallow } from "enzyme";
import Summarize_chart from "./summarize_chart";

describe("Summarize_chart", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Summarize_chart />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from "react";
import { shallow } from "enzyme";
import Plan_log from "./Plan_log";

describe("Plan_log", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Plan_log />);
    expect(wrapper).toMatchSnapshot();
  });
});

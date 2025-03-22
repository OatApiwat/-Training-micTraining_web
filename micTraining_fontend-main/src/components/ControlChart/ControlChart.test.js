import React from "react";
import { shallow } from "enzyme";
import ControlChart from "./ControlChart";

describe("ControlChart", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ControlChart />);
    expect(wrapper).toMatchSnapshot();
  });
});

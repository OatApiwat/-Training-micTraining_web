import React from "react";
import { shallow } from "enzyme";
import IOT from "./IOT";

describe("IOT", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<IOT />);
    expect(wrapper).toMatchSnapshot();
  });
});

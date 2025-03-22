import React from "react";
import { shallow } from "enzyme";
import ReactWeb from "./reactWeb";

describe("ReactWeb", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ReactWeb />);
    expect(wrapper).toMatchSnapshot();
  });
});

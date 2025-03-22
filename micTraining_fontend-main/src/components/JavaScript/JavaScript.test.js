import React from "react";
import { shallow } from "enzyme";
import JavaScript from "./JavaScript";

describe("JavaScript", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<JavaScript />);
    expect(wrapper).toMatchSnapshot();
  });
});

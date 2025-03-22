import React from "react";
import { shallow } from "enzyme";
import Python from "./Python";

describe("Python", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Python />);
    expect(wrapper).toMatchSnapshot();
  });
});

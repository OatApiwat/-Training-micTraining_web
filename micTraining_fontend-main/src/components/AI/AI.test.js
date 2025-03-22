import React from "react";
import { shallow } from "enzyme";
import AI from "./AI";

describe("AI", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AI />);
    expect(wrapper).toMatchSnapshot();
  });
});

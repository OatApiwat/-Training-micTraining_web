import React from "react";
import { shallow } from "enzyme";
import ChangePW from "./ChangePW";

describe("ChangePW", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ChangePW />);
    expect(wrapper).toMatchSnapshot();
  });
});

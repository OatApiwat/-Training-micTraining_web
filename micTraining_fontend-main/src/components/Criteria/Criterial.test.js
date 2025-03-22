import React from "react";
import { shallow } from "enzyme";
import Criterial from "./criterial";

describe("Criterial", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Criterial />);
    expect(wrapper).toMatchSnapshot();
  });
});

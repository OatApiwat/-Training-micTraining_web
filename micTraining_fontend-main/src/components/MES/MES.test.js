import React from "react";
import { shallow } from "enzyme";
import MES from "./MES";

describe("MES", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MES />);
    expect(wrapper).toMatchSnapshot();
  });
});

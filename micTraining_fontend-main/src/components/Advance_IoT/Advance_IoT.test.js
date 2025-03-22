import React from "react";
import { shallow } from "enzyme";
import Python from "./Python";

describe("Advance_IoT", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Advance_IoT />);
    expect(wrapper).toMatchSnapshot();
  });
});

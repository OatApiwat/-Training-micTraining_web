import React from "react";
import { shallow } from "enzyme";
import Python_task from "./python_task";

describe("Python_task", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Python_task />);
    expect(wrapper).toMatchSnapshot();
  });
});

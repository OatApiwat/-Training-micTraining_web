import React from "react";
import { shallow } from "enzyme";
import EditPlan from "./editPlan";

describe("EditPlan", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EditPlan />);
    expect(wrapper).toMatchSnapshot();
  });
});

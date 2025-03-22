import React from "react";
import { shallow } from "enzyme";
import CourseMaster from "./CourseMaster";

describe("CourseMaster", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CourseMaster />);
    expect(wrapper).toMatchSnapshot();
  });
});

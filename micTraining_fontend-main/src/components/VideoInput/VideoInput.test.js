import React from "react";
import { shallow } from "enzyme";
import VideoInput from "./VideoInput";

describe("VideoInput", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<VideoInput />);
    expect(wrapper).toMatchSnapshot();
  });
});

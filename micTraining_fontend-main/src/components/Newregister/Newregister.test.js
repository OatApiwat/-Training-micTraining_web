import React from "react";
import { shallow } from "enzyme";
import Newregister from "./Newregister";

describe("Newregister", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Newregister />);
    expect(wrapper).toMatchSnapshot();
  });
});

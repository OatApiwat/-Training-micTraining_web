import React from "react";
import { shallow } from "enzyme";
import DepverlopTeam from "./DepverlopTeam";

describe("DepverlopTeam", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DepverlopTeam />);
    expect(wrapper).toMatchSnapshot();
  });
});

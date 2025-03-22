import React from "react";
import { shallow } from "enzyme";
import Evaluation from "./Evaluation";

describe("Evaluation", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Evaluation />);
    expect(wrapper).toMatchSnapshot();
  });
});

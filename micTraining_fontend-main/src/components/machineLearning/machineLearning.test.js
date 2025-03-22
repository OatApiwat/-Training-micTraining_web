import React from "react";
import { shallow } from "enzyme";
import MachineLearning from "./machineLearning";

describe("MachineLearning", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MachineLearning />);
    expect(wrapper).toMatchSnapshot();
  });
});

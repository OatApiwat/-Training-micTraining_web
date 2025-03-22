import React from "react";
import { shallow } from "enzyme";
import EvaluateForm from "./evaluateForm";

describe("EvaluateForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EvaluateForm />);
    expect(wrapper).toMatchSnapshot();
  });
});

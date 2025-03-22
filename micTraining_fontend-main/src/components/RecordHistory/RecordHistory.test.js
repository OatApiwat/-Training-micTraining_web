import React from "react";
import { shallow } from "enzyme";
import RecordHistory from "./RecordHistory";

describe("RecordHistory", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RecordHistory />);
    expect(wrapper).toMatchSnapshot();
  });
});

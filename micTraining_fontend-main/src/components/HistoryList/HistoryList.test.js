import React from "react";
import { shallow } from "enzyme";
import HistoryList from "./HistoryList";

describe("HistoryList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HistoryList />);
    expect(wrapper).toMatchSnapshot();
  });
});

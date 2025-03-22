import React from "react";
import { shallow } from "enzyme";
import Pandas from "./pandas";

describe("Pandas", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pandas />);
    expect(wrapper).toMatchSnapshot();
  });
});

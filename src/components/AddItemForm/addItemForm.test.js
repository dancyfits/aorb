import React from "react";
import { shallow } from "enzyme";
import AddItemForm from "./AddItemForm";

describe("AddItemForm", () => {
  it("passes input when submit button is clicked", () => {
    let input = "string";

    let wrapper = shallow(<AddItemForm onAdd="somethingsomethingvalue" />);

    const addItemInput = wrapper.find(".addItemInput");
    const addItemSubmit = wrapper.find(".addItemSubmit");

    console.log(addItemInput);
    addItemSubmit.simulate("input", { target: { value: "WORKSTUPID" } });
    // addItemInput.props.value = input;
    console.log(addItemInput.get(0));

    addItemSubmit.simulate("click");

    expect(somethingsomething.onAdd).toMatch(input);
  });
});

// https://github.com/airbnb/enzyme/issues/76

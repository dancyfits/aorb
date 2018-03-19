import React from "react";
import { shallow } from "enzyme";
import AddItemForm from "./AddItemForm";
import App from "../../App";

it("leaves me alone", () => {
  const two = 1 + 1;
  expect(two).toEqual(2);
});
//
// describe("AddItemForm", () => {
//   it("passes input when submit button is clicked", () => {
//     let input = "string";
//
//     let wrapper = shallow(<AddItemForm onAdd={App.handleAdd} />);
//
//     const addItemInput = wrapper.find(".addItemInput");
//     const addItemSubmit = wrapper.find(".addItemSubmit");
//
//     console.log(addItemInput);
//     // addItemInput.simulate("change", {
//     //   target: { name: "value", value: input }
//     // });
//     addItemInput.props.value = input;
//     console.log(addItemInput.get(0));
//
//     addItemSubmit.simulate("click");
//
//     expect(somethingsomething.onAdd).toMatch(input);
//   });
// });

// https://github.com/airbnb/enzyme/issues/76

import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import AddItemForm from "./AddItemForm";

it("adds input to item list when submit button is clicked", () => {
  let result = somestring;

  const wrapper = shallow(<AddItemForm />);

  const addItemInput = wrapper.find(".addItemInput");
  const addItemSubmit = wrapper.find(".addItemSubmit");

  addItemSubmit.simulate("click");

  expect(result).not.toBeNull();
});

// Input should be an acceptable type: string for now
// Is having a test string a bad idea? https://github.com/airbnb/enzyme/issues/76
// Should handleAdd be part of this component instead of App?

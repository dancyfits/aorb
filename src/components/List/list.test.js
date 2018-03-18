import React from "react";
import { shallow } from "enzyme";
import List from "./List";

describe("List", () => {
  const data = {
    1: { name: "test", rating: 1000, id: "1" },
    2: { name: "test2", rating: 1000, id: "2" },
    3: { name: "test3", rating: 1000, id: "3" }
  };
  let component = shallow(<List items={data} />);
  it("Shows items", () => {
    let items = component.find("li");
    expect(items.length).toBe(3);
  });
  it("Displays list item name", () => {
    let item = component.find("li").get(0).props.children[0]; //wtf
    expect(item).toBe("test");
  });
  // Calls App onDelete method
  // it("Deletes items", () => {
  //   let button = component.find("button").get(0);
  //   button.simulate("click");
  //   let item = component.find("li").get(0).props.children[0];
  //   expect(item).not.toBe("test");
  // });
});

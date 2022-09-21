// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import R2oNavbar from "./R2oNavbar";
import { R2oNavbarProps } from "./R2oNavbar.types";

describe("Test Component", () => {
  let props: R2oNavbarProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<R2oNavbar {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "niko was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("R2oNavbar");

    expect(component).toHaveTextContent("niko was here");
  });
});

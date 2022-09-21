// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import R2oAppContainer from "./R2oAppContainer";
import { R2oAppContainerProps } from "./R2oAppContainer.types";

describe("Test Component", () => {
  let props: R2oAppContainerProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<R2oAppContainer {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "niko was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("R2oAppContainer");

    expect(component).toHaveTextContent("niko was here");
  });
});

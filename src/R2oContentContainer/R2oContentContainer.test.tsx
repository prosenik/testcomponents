// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import R2oContentContainer from "./R2oContentContainer";
import { R2oContentContainerProps } from "./R2oContentContainer.types";

describe("Test Component", () => {
  let props: R2oContentContainerProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<R2oContentContainer {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "niko was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("R2oContentContainer");

    expect(component).toHaveTextContent("niko was here");
  });
});

// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import R2oBasket from "./R2oBasket";
import { R2oBasketProps } from "./R2oBasket.types";

describe("Test Component", () => {
  let props: R2oBasketProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<R2oBasket {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "niko was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("R2oBasket");

    expect(component).toHaveTextContent("niko was here");
  });
});

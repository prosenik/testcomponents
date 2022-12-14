import React from "react";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";

const TestComponent: React.FC<TestComponentProps> = ({ heading, content }) => (
  <div data-testid="test-component" className="test-component">
    <h1 data-testid="test-component__heading" className="heading">
      {heading}
    </h1>
    <div data-testid="test-component__content">{content}</div>
  </div>
);

const MemoButton = React.memo(TestComponent);

MemoButton.displayName = "R2oButton";

export default TestComponent;

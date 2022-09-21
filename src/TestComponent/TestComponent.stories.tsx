import React from "react";
import TestComponent from "./TestComponent";

export default {
  title: "TestComponent",
};

export const WithText = () => (
  <TestComponent heading="I am a aaa component" content={<h2>Test</h2>} />
);

export const WithButtons = () => (
  <TestComponent
    heading="I have a button"
    content={
      <div>
        <button onClick={() => alert("You clicked me!")}>Click me</button>
      </div>
    }
  />
);

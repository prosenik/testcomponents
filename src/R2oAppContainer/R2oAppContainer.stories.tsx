// Generated with util/create-component.js
import React from "react";
import R2oAppContainer from "./R2oAppContainer";

import R2oBasket from "../R2oBasket/R2oBasket";
import R2oNavbar from "../R2oNavbar/R2oNavbar";
import R2oContentContainer from "../R2oContentContainer/R2oContentContainer";

export default {
  title: "Container/R2oAppContainer",
};

export const Skeleton = () => (
  <R2oAppContainer foo="bar">
    <R2oNavbar foo="R2oNavbar" />
    <R2oBasket foo="R2oBasket" />
    <R2oContentContainer foo="R2oContentContainer" />
  </R2oAppContainer>
);

export const Variant02 = () => <R2oAppContainer foo="baz" />;

module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import ${componentName} from "./${componentName}";

export default {
    title: "AdjustParent/${componentName}"
  
};

export const Variant01 = () => <${componentName} foo="bar" />;

export const Variant02 = () => <${componentName} foo="baz" />;

`,
  extension: `.stories.tsx`,
});

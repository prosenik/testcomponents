module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
@import "../variables.scss";
@import "../typography.scss";

.componentName{
  @include font-defaults;
}
.componentName--default{
  
} 
`,
  extension: `.scss`,
});

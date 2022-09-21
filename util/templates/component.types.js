module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
export type ${componentName}Props {
    foo: string;
}
`,
  extension: `.types.ts`,
});

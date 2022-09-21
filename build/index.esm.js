import { jsxs, jsx } from 'react/jsx-runtime';
import React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ":root {\n  --background: #fff;\n  --font-color: #494949;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --background: #3c3c3c;\n    --font-color: #fafafa;\n  }\n}\n.test-component {\n  background-color: red;\n  color: var(--font-color);\n  border: 1px solid #131111;\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n}\n.test-component .heading {\n  font-family: \"Avenir Next\", Helvetica, Arial, sans-serif;\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.testcss {\n  color: blue;\n}";
styleInject(css_248z);

var TestComponent = function (_a) {
    var heading = _a.heading, content = _a.content;
    return (jsxs("div", __assign({ "data-testid": "test-component", className: "test-component" }, { children: [jsx("h1", __assign({ "data-testid": "test-component__heading", className: "heading" }, { children: heading }), void 0), jsx("div", __assign({ "data-testid": "test-component__content" }, { children: content }), void 0)] }), void 0));
};
var MemoButton = React.memo(TestComponent);
MemoButton.displayName = "R2oButton";

export { TestComponent };
//# sourceMappingURL=index.esm.js.map

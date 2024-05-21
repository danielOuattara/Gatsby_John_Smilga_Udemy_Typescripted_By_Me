import * as React from "react";
import ReactDOM from "react-dom/client";
import { Highlight, themes } from "prism-react-renderer";
import styled from "styled-components";

// const codeBlock = `
// const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
//   return (
//     <div>
//       <h2>{item.name}</h2>
//       <p>Price: {item.price}</p>
//       <p>Quantity: {item.quantity}</p>
//     </div>
//   );
// }
// `;

export default function Example(props: any) {
  //   console.log("props = ", props);
  const codeBlock = props.children.props.children.trim();
  const language = props.children.props.className
    .replace(/language-/, "")
    .trim();
  return (
    <Highlight theme={themes.vsDark} code={codeBlock} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {/* <span>{i + 1}</span> */}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

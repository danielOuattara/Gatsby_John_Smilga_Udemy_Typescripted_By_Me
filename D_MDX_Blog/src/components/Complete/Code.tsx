import * as React from "react";

interface ICodeProps {
  children?: React.ReactNode;
}

export default function Code({ children }: ICodeProps) {
  return (
    <code
      style={{
        background: "var(--clr-grey-10)",
        color: "var(--clr-grey-5)",
        padding: "1rem",
        borderRadius: "var(--radius)",
      }}
    >
      {children}
    </code>
  );
}

//-------------------------------------------------------------

// import * as React from "react";

// interface ICodeProps {
//   children?: React.ReactNode;
// }

// export default function Code({ children }: ICodeProps) {
//   const isCodeBlock =
//     typeof children === "string" && children.trim().startsWith("```");

//   return isCodeBlock ? (
//     <pre className="language-tsx">
//       <code>{children}</code>
//     </pre>
//   ) : (
//     <code
//       style={{
//         background: "var(--clr-grey-10)",
//         color: "var(--clr-grey-5)",
//         padding: "1rem",
//         borderRadius: "var(--radius)",
//         margin: "1rem auto 1rem auto",
//       }}
//     >
//       {children}
//     </code>
//   );
// }

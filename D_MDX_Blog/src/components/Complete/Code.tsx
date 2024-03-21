import * as React from "react";
import type { PageProps } from "gatsby";

export default function Code({ children }: PageProps) {
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

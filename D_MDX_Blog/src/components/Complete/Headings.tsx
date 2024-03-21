import * as React from "react";
import styled from "styled-components";
import type { PageProps } from "gatsby";

interface ImyH2Props extends PageProps {
  title: string;
}

export function myH2({ children, title }: ImyH2Props) {
  if (title) {
    return (
      <HeadingTwo>
        <h2>{children}</h2>
        <div className="underline"></div>
      </HeadingTwo>
    );
  }
  return (
    <h2
      style={{
        margin: "2rem 0",
        color: "var(--clr-grey-5)",
      }}
    >
      {children}
    </h2>
  );
}
const HeadingTwo = styled.div`
  margin: 2rem 0;
  .underline {
    width: 5rem;
    height: 5px;
    background: var(--clr-primary-5);
  }
`;
//---------------------------------------------------------------

export function myH4(props: PageProps) {
  return (
    <h3 style={{ margin: "2rem 0", color: "var(--clr-primary-5)" }}>
      {props.children}
    </h3>
  );
}

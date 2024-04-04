import * as React from "react";
import styled from "styled-components";
import type { PageProps } from "gatsby";

export interface ImyH2Props {
  title?: string;
  children?: React.ReactNode;
}

export function myH2({ children, title }: ImyH2Props) {
  if (title) {
    return (
      <H2Wrapper>
        <h2>{children}</h2>
        <div className="underline"></div>
      </H2Wrapper>
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
const H2Wrapper = styled.div`
  margin: 2rem 0;
  .underline {
    width: 5rem;
    height: 5px;
    background: var(--clr-primary-5);
  }
`;
//---------------------------------------------------------------
interface ImyH4Props {
  title?: string;
  children?: React.ReactNode;
}

export function myH4(props: ImyH4Props) {
  return (
    <h3
      style={{
        margin: "2rem 0",
        color: "var(--clr-primary-5)",
        textDecoration: "underline",
      }}
    >
      {props.children}
    </h3>
  );
}

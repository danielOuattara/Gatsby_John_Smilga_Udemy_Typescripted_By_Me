import * as React from "react";
import styled from "styled-components";
import { Categories } from "./../index";
import Title from "./Title";

export default function BannerCategories() {
  return (
    <Wrapper>
      <Title title={"categories"} />
      <Categories />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .category {
    font-size: 1rem;
    color: var(--clr-grey-5);
    text-transform: capitalize;
    display: block;
    padding: 0.5rem 0 0.5rem 1rem;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    border-radius: var(--radius);
  }
  .category:hover {
    background: var(--clr-grey-10);
  }
`;

import * as React from "react";
import SocialLinks from "../../constants/socialLinks";
import { StaticImage } from "gatsby-plugin-image";
import Title from "./Title";
import styled from "styled-components";

export default function About() {
  return <Wrapper>Banner About</Wrapper>;
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`;

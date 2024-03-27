import * as React from "react";
import SocialLinks from "../../constants/socialLinks";
import { StaticImage } from "gatsby-plugin-image";
import Title from "./Title";
import styled from "styled-components";

export default function About() {
  return (
    <Wrapper>
      <Title title={"about me"} />
      <StaticImage
        src="./../../assets/banner.jpeg"
        alt="author"
        layout="fixed"
        width={100}
        height={100}
        className="img"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        repellat similique ratione eius perferendis earum?
      </p>

      <SocialLinks styleClass={"banner-icons"} />
    </Wrapper>
  );
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

import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface IHeroProps {
  showPersonImg: boolean;
}

export default function Hero({ showPersonImg }: IHeroProps) {
  return (
    <header className="hero">
      {showPersonImg && (
        <StaticImage
          src="./../assets/person.png"
          placeholder="blurred"
          className="hero-person"
          alt="person typing on keyboard"
        />
      )}
    </header>
  );
}

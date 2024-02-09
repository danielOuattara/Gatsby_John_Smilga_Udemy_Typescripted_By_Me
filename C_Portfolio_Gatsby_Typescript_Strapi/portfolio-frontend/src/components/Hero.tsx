import * as React from "react";
import { Link } from "gatsby";
import { social_links } from "../constants";
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I am Daniel</h1>
            <h4> Freelance Fullstack Developer: web & mobile</h4>
            <Link to="/contact" className="btn">
              Contact me
            </Link>
            <div className="social-links">
              {social_links.map((link) => (
                <a
                  href={link.url}
                  key={link.id}
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </article>
        <StaticImage
          src="./../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  );
}

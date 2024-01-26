import React from "react";
import "./images_Example_1.module.css";
import big from "./../../assets/images/big.jpg";
import { StaticImage } from "gatsby-plugin-image";

export default function ImagesExample1() {
  return (
    <>
      <h2>Gatsby Test Images</h2>
      <section>
        <img src={big} alt="food-meal 1" />

        <StaticImage
          src={"./../../assets/images/big-copy.jpg"}
          alt="huge image"
        />

        <StaticImage
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="huge image online"
        />
      </section>
    </>
  );
}

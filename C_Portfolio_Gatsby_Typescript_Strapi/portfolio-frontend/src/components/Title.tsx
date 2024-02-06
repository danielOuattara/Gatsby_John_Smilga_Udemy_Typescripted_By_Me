import * as React from "react";

type TypeTitle = {
  title: string;
};

export default function Title({ title }: TypeTitle) {
  return (
    <div className="section-title">
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
    </div>
  );
}

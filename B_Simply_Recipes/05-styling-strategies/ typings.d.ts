// declare module "*.module.css";

// declare module "*.module.css" {
//   const content: { [className: string]: string };
//   export default content;
// }

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// declare module "*.module.css";
// declare module "*.module.scss";

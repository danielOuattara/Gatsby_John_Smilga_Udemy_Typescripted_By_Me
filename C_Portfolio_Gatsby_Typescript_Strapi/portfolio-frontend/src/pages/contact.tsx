import * as React from "react";
import { SEO } from "../components";

export default function Contact() {
  return (
    <section className="contact-page">
      <article className="contact-form">
        <h3>stay in touch ?</h3>
        <p>(not activated yet)</p>
        <form>
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="form-control"
            />
            <textarea
              name="message"
              id="message"
              rows={7}
              className="form-control"
              placeholder="message"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn btn">
            submit
          </button>
        </form>
      </article>
    </section>
  );
}

export const Head = () => <SEO title={"Contact"} image="/contact.png" />;

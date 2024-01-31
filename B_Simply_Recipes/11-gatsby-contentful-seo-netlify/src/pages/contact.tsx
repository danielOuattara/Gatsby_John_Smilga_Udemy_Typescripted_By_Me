import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "./../components";

export default function Contact(props: PageProps) {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Stay in Touch ?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus iste dolorem id maxime quidem vitae
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quaerat, est placeat quibusdam distinctio repellat nobis assumenda
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name"> name</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className="form-row">
                <label htmlFor="email"> email</label>
                <input type="text" name="email" id="email" />
              </div>

              <div className="form-row">
                <label htmlFor="message"> message</label>
                <textarea name="message" id="message"></textarea>
              </div>

              <button type="submit" className="btn block">
                send
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Contact Page</title>;

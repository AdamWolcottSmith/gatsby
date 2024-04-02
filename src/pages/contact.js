import React from "react";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <h1>CONTACT PAGE</h1>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              <input placeholder="name" type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              <input placeholder="email@email.com" type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              <textarea
                placeholder="but why? and how? would you?"
                name="message"
              ></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Layout>
    </div>
  );
};

export default ContactPage;

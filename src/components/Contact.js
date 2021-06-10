import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="mb-3 contact-heading">Contact Me</h1>

      <form>
        <div className="row">
          <div class="mb-5 col-md-6">
            <label for="name" class="form-label fs-5">
              Name
            </label>
            <input type="text" class="form-control" id="name1" />
          </div>

          <div class="mb-5 col-md-6">
            <label for="email" class="form-label fs-5">
              Email
            </label>
            <input type="email" class="form-control" id="email1" />
          </div>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label fs-5">
            Message
          </label>
          {/* <input type="textarea" class="form-control" id="message1" /> */}
          <textarea class="form-control" id="message1" rows="3"></textarea>
        </div>

        <button type="submit" class="btn btn-warning mb-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

import React from "react";
import "./Form.css";
import Fade from "react-reveal/Fade";

const Form = () => {
  return (
    <>
      <section>
        <div id="Emailus" className="form_section">
          <Fade left>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div className="form_input_section">
              <div>
                <h1>Stay in the loop</h1>
                <p>
                  Subscribe to receive the latest news and updates about TDA. We
                  promise not to spam you!
                </p>
              </div>

              <div className="form_input_div">
                <input type="text" placeholder="Enter email address" />
                <button>Continue</button>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Form;

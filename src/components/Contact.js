import React from "react";
import "../Contact.css";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Contact = () => {
  {
    /*
    Symbols Reference
    
    &#58;   ->  colon( : )
    &#123;  ->  opening curly bracket( { )
    &#125;  ->  closing culry bracket( } )
    
    */
  }

  return (
    <div className="container contact-page-div h2">
      <span className="yellow">&#123;</span>
      <br />
      <span className="blue mx-4">"name"</span>
      <span className="grey">&#58;</span>
      <span className="green">"Gabriel Austin"</span>
      <span className="grey">,</span>
      <br />
      <span className="blue mx-4">"email"</span>
      <span className="grey">&#58;</span>{" "}
      <span className="green">"gabriel.austin2019@gmail.com"</span>
      <span className="grey">,</span>
      <br />
      <span className="blue mx-4">"github"</span>
      <span className="grey">&#58;</span>{" "}
      <span className="green">"www.github.com/gabeaustin"</span>
      <span className="grey">,</span>
      <br />
      <span className="blue mx-4">"linkedin"</span>
      <span className="grey">&#58;</span>{" "}
      <span className="green">"www.linkedin.com/in/gabrielaustin"</span>
      <br />
      <span className="yellow">&#125;</span>
    </div>
  );
};

export default Contact;

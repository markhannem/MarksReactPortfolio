import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";

const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Chat</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              709-555-1234
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              markhannem3@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              22 Premier Drive Lewisporte, NL A0G3A0
            </div>
            <div className="c-info-item">
              <a href="https://github.com/markhannem">
                <img className="c-icon" src={Github} alt="" />
              </a>
              My GitHub!
            </div>
            <div className="c-info-item">
              <a href="https://www.linkedin.com/in/mark-hannem-b6b8b4178/">
                <img className="c-icon" src={Linkedin} alt="" />
              </a>
              My LinkedIn!
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Got a question or concern?</b> Get in touch and id be happy to
            reply!
          </p>
          <form>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

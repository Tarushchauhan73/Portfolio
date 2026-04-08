import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a href={`mailto:${portfolioData.contact.email}`}>
                {portfolioData.contact.email}
              </a>
            </p>
            <p>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn
              </a>
            </p>
            <p>{portfolioData.contact.phone}</p>
            <p>{portfolioData.contact.location}</p>
            <h4>Education</h4>
            {portfolioData.education.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="contact-box">
            <h4>Profiles</h4>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href={portfolioData.contact.leetcode}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
            <a
              href={portfolioData.contact.codeforces}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Codeforces <MdArrowOutward />
            </a>
            <h4>Highlights</h4>
            {portfolioData.achievements.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="contact-box">
            <h2>
              Software engineering student with strong interest in <br />
              <span>cloud-native systems and AI-enabled products</span>
            </h2>
            <h4>Certifications</h4>
            {portfolioData.certifications.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

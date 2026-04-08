import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { portfolioData } from "../data/portfolioData";

const Landing = ({ children }: PropsWithChildren) => {
  const { greeting, eyebrow, primary, secondary } = portfolioData.hero;
  const { first, last } = portfolioData.name;

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>{greeting}</h2>
            <h1>
              {first.toUpperCase()}
              <br />
              <span>{last.toUpperCase()}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>{eyebrow}</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{primary}</div>
              <div className="landing-h2-2">{secondary}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{secondary}</div>
              <div className="landing-h2-info-1">{primary}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;

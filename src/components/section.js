import React, { Component } from "react";
import "../css/section.css";
import Fade from "react-reveal/Fade";

class Section extends Component {
  state = {};
  render() {
    const { id,title, orderonline, touchless, img, leftBtnText, rightBtnText } =
      this.props;

    return (
      <section
        className="section" id ={id}
        style={{ backgroundImage: "url(/img/" + img + ")" }}
      >
        <Fade bottom>
          <div className="model">
            <h1>{title}</h1>
            <p>
              {orderonline}
              <span className="touchless">{touchless}</span>
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="buttons">
            <div className="ButtonsWrapper">
              <button className="buttonLeft">{leftBtnText}</button>
              {rightBtnText && (
                <button className="buttonRight">{rightBtnText}</button>
              )}
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Section;

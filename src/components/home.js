import React, { Component } from "react";
import "../css/home.css";
import "../css/section.css";
import Section from "./section";

class Home extends Component {
   
  handleClick(){ 
    //Scroll to next section    
    document.getElementById("mys").scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' })
  }
  render() {
    return (
      <section className="home">
        <Section
          title="Model 3"
          orderonline="Order online for "
          touchless="Touchless Delivery"
          img="model-3.jpeg"
          leftBtnText ="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <div className="downArrow" onClick={this.handleClick}>
          <img src="/img/down-arrow.svg" alt="arrowdown" />
        </div>
        <Section 
          id="mys"
          title="Model Y"
          orderonline="Order online for "
          touchless="Touchless Delivery"
          img="model-y.jpeg"
          leftBtnText ="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model S"
          orderonline="Order online for "
          touchless="Touchless Delivery"
          img="model-s.jpeg"
          leftBtnText ="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model X"
          orderonline="Order online for "
          touchless="Touchless Delivery"
          img="model-x.jpeg"
          leftBtnText ="Custom Order"
          rightBtnText="Existing Inventory"
        />{" "}
        <Section
          title="Solar Panels"
          orderonline="Order online for "
          touchless="Touchless Delivery"
          img="solar-panel.jpeg"
          leftBtnText ="Order Now"
          rightBtnText="Learn now"
        />{" "}
        <Section
          title="Solar Roofs"
          orderonline="Order online for "
          touchless="Touchless Delivery"
          img="solar-roof.jpeg"
          leftBtnText ="Order Now"
          rightBtnText="Learn now"
        />{" "}
        <Section
          title="Accessories"
          orderonline="Order online for "
          touchless="Touchless Delivery"
          img="accessories.jpeg"
          leftBtnText ="Shop Now" 
        />
      </section>
    );
  }
}

export default Home;

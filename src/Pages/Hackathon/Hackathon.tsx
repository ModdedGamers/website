import React, { Component } from "react";
import Theme from './Theme';
import Overview from './Overview';
import Sponsors from './Sponsors';
import Prizes from './Prizes';
import FAQ from './FAQ';
import Rules from './Rules';
import CanvasForOverview from './CanvasForOverview';
import Judges from './Judges';
import './Hackathon.css';

export default class HackathonPage extends Component {
  waitForElement () {
    let background = document.getElementById("pageBackground")!;
    if (background){
        //variable exists, do what you want
      background.style.backgroundImage = "";
      background.style.backgroundColor = "#252525";
    }
    else {
        setTimeout(this.waitForElement, 250);
    }
  }

  render = () => {
    this.waitForElement();
    return (
      <div>
        <CanvasForOverview />
        <Overview />
        <Theme />
        <Sponsors />
        <Prizes />
        <Judges/>
        <Rules />
        <FAQ />
      </div>
    );
  }
}
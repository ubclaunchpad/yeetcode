import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const marks = [
  {
    value: 0,
    label: "0%"
  },
  {
    value: 50,
    label: "50%"
  },
  {
    value: 100,
    label: "100%"
  }
];

function valuetext(value) {
  return `${value}%`;
}

export default function DiscreteSlider() {

  return (
    <div className="slider">
      <Typography id="discrete-slider-always" gutterBottom>
        Your Progress
      </Typography>
      <Slider
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        style={{ color: "green" }}
      />
      <div className="slider" />
      <Typography id="discrete-slider-always" gutterBottom>
        Opponent &apos; s Progress
      </Typography>
      <Slider
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        style={{ color: "red" }}
      />
    </div>
  );
}

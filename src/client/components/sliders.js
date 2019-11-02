import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300
  },
  margin: {}
});

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
  const classes = useStyles();

  return (
    <div className={classes.root} className="slider">
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
      <div className={classes.margin} className="slider" />
      <Typography id="discrete-slider-always" gutterBottom>
        Opponent's Progress
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

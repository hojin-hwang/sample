import React, { useRef, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { memo } from 'react';

const MySlider = memo((props) => {
    
    const [sliderValue, setSliderValue] = useState();

    const handleChange = (event, newValue) => {
        setSliderValue(newValue);        
      };

    const useStyles = makeStyles((theme) => ({
        root: {
          width: 300,
          margin: "3em",
        },
        margin: {
          height: theme.spacing(3),
        },
    }));
    
    function valuetext(value) {
        return `${value}°C`;
    }

    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom> Temperature </Typography>
            <Slider
                defaultValue={30}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
                onChange={handleChange} 
            />
            <span>{sliderValue}</span>
        </div>
    );
});

export default MySlider;
import React, { useState } from 'react';
import Loader from "react-loader";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './home.module.css'
import ReactButton from './react_button';
import MySlider from './mySlider';

import Button from '@material-ui/core/Button';

function Home(props) {
  
  const [loaded, setLoaded] = useState(true);
  const getConfigurableProps = () => ({
    /*showArrows: boolean('showArrows', true, tooglesGroupId),
    showStatus: boolean('showStatus', true, tooglesGroupId),
    showIndicators: boolean('showIndicators', true, tooglesGroupId),
    infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
    showThumbs: boolean('showThumbs', true, tooglesGroupId),*/
    showThumbs: false,
    showIndicators:true, // O O O 
    showArrows:false,
    showStatus:false,
    autoPlay: ('autoPlay', true, 'toogles'),
    infiniteLoop : true,
    /*useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
    autoPlay: boolean('autoPlay', true, tooglesGroupId),
    stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
    swipeable: boolean('swipeable', true, tooglesGroupId),
    dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
    emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
    thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
    selectedItem: number('selectedItem', 0, {}, valuesGroupId),
    interval: number('interval', 3000, {}, valuesGroupId),
    transitionTime: number('transitionTime', 150, {}, valuesGroupId),
    swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),*/
});

const loadingButtonClick = () =>{
  setLoaded(!loaded);
}
      return (
      <>
      <h1>Home</h1>
      <Carousel {...getConfigurableProps()}>
        {/**https://github.com/leandrowd/react-responsive-carousel */}
            <div>
                <img src="./images/111.jpg" alt="rolling"/>
            </div>
            <div>
            <img src="./images/112.jpg" alt="rolling" />
            </div>
            <div>
              <img src="./images/113.png" alt="rolling" />
            </div>
        </Carousel>

        <ReactButton className={styles.loadingBtn} state={'idle'} idleText={'Loading Button'} shadow={true} onClick={loadingButtonClick} />
        <MySlider />

        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>

        <Button variant="contained" color="primary" disableElevation>
          Disable elevation
        </Button>

      <Loader
        loaded={loaded}
        lines={13}
        length={20}
        width={10}
        radius={30}
        corners={1}
        rotate={0}
        direction={1}
        color="#000"
        speed={1}
        trail={60}
        shadow={false}
        hwaccel={false}
        className="spinner"
        zIndex={2e9}
        top="10%"
        left="50%"
        scale={1.0}
        loadedClassName="loadedContent"
      />

     
      {/*<button onClick={()=>{
        props.history.push('/profile');
      }}>go to profile</button>*/ }

      </>
      )
};

export default Home
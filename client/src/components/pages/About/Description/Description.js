import React from "react";
import Carousel from "react-material-ui-carousel";
import { Typography, Box } from "@material-ui/core";
import useStyles from "./styles.js";
import descData from "./descData.js";
import "./styles1.css";

const Description = () => {
  const classes = useStyles();
  const Item = (props) => {
    return (
      <div className={classes.parent}>
        <div
          className={classes.paper}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,1,1,0.2),rgba(1,0,0.3)),url(" +
              props.item.img +
              ")",
          }}
        >
          <div className={classes.content}>
            <Typography variant="h1">
              <Box
                fontWeight="fontWeightBold"
                letterSpacing={10}
                className={classes.contentBold}
              >
                DriVehicle
              </Box>
            </Typography>
            <Typography
              variant="h5"
              className={classes.smallText}
              style={{ fontWeight: 500 }}
            >
              {props.item.subHeading}
            </Typography>
            <Typography variant="h6" className={classes.smallText}>
              {props.item.description}
            </Typography>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <Carousel
        indicators={false}
        animation="fade"
        autoPlay={true}
        interval={10000}
        stopAutoPlayOnHover={false}
        navButtonsAlwaysInvisible={true}
      >
        {descData.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Carousel>
    </>
  );
};

export default Description;

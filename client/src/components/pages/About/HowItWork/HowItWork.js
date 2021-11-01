import React from "react";
import useStyles from "./styles.js";
import { Typography, Box } from "@material-ui/core";
import "./styles_hiw.scss";
import "./styles_hiw.css";

const HowItWork = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <div className={classes.Main}>
          <div className={classes.name}>
            <Typography variant="h4" className={classes.content}>
              <div class="divider">
                <span></span>
                <span>
                  <Box
                    fontWeight="600"
                    letterSpacing={6}
                    className={classes.contentBold}
                  >
                    How It Works
                  </Box>
                </span>
                <span></span>
              </div>
            </Typography>
          </div>

          <ul class="process">
            <li class="process__item">
              <span class="process__number">1</span>
              <span class="process__title">Register</span>
              <span class="process__subtitle">
                Register using your Email Id.
              </span>
            </li>

            <li class="process__item">
              <span class="process__number">2</span>
              <span class="process__title">Add New Vehicle</span>
              <span class="process__subtitle">
                Add a New Vehicle using Vehicle Number and its details.
              </span>
            </li>

            <li class="process__item">
              <span class="process__number">3</span>
              <span class="process__title">Get Confirmation</span>
              <span class="process__subtitle">
                You will recieve confirmation after registering a new vehicle.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HowItWork;

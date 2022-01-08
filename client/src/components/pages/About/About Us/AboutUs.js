import React from "react";
import useStyles from "./styles.js";
import { Typography, Box, Grid, Paper } from "@material-ui/core";
import "./AboutUs.css";

const AboutUs = () => {
  const classes = useStyles();

  return (
    <>
      <div id="AboutUs">
        <div className={classes.Main}>
          <div className={classes.name}>
            <Typography variant="h4" className={classes.content}>
              <div class="divider">
                <span></span>
                <span>
                  <Box
                    fontWeight="800"
                    letterSpacing={6}
                    className={classes.contentBold}
                  >
                    <a id="AboutUs"> About Us</a>
                  </Box>
                </span>
                <span></span>
              </div>
            </Typography>
          </div>

          <div className={classes.contenttext}>
            <div>
              <Box display="flex" justifyContent="center">
                <Grid item>
                  <Grid container direction="column" spacing={2}>
                    <Grid key={0} item>
                      <Paper className={classes.paper}>
                        <div>
                          <div>
                            <Typography style={{ color: "white" }}>
                              <Box
                                fontWeight="800"
                                fontSize={25}
                                letterSpacing={2}
                              >
                                Our Mission{" "}
                              </Box>
                            </Typography>
                          </div>
                          <div>
                            <Typography style={{ color: "white" }}>
                              <Box
                                fontWeight="400"
                                fontSize={15}
                                letterSpacing={2}
                              >
                                To provide the best service to our customers.
                              </Box>
                            </Typography>
                          </div>
                        </div>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </div>
            <Typography style={{ margin: "20px 0px 0px 0px " }}>
              With the aim to provide easy accessibility to India’s underserved
              population by “Ensuring access to quality Vehicle Registration for
              all”. Electric scooters are set motorized wheels propelled by
              human force or by the combination of being force and electrical
              machine, capable of propelling the transport not more than 30 Mph
              on level ground. The transport consists of two wheels and one
              machine which triggers at a specific rate. These scooters provide
              higher efficiency in comparison to traditional scooters at the
              cost of somewhat reduced performance. Technological development
              takes these scooters as the clean travel choice without the hassle
              of communication and crowded public transport.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

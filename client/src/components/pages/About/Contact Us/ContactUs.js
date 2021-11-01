import React, { useState } from "react";
import {
  TextField,
  Container,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import image from "./image.svg";
import useStyles from "./style";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.main}>
        <div
          style={{
            background: "#FFFAFA",
            alignItems: "center",
          }}
        >
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
                    Contact Us
                  </Box>
                </span>
                <span></span>
              </div>
            </Typography>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.left}>
            <Container style={{ borderRadius: "5px", border: "red" }}>
              <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
              >
                <Typography variant="h5" align="center">
                  <Box fontWeight="600" letterSpacing={3}>
                    Send Message
                  </Box>
                </Typography>

                <TextField
                  name="name"
                  variant="outlined"
                  label="Enter your name"
                  fullWidth
                />
                <TextField
                  name="message"
                  variant="outlined"
                  label="Message"
                  fullWidth
                  multiline
                  rows={9}
                />

                <Button
                  variant="contained"
                  type="submit"
                  className="btn-grad"
                  style={{
                    color: "white",
                    fontWeight: 700,
                    width: "250px",
                    marginBottom: "10px",
                    transition: "0.5s",
                  }}
                >
                  <Typography variant="h6" align="center">
                    <Box fontWeight="600" letterSpacing={1}>
                      Send
                    </Box>
                  </Typography>
                </Button>
              </form>
            </Container>
          </div>
          <div className={classes.right}>
            <img
              src={image}
              alt="home pic"
              style={{ height: "400px", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

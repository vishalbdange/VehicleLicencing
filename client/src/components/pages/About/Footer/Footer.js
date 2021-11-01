import React from "react";
import useStyles from "./style.js";
import logo from "./logo.png";
import { Typography, CssBaseline, Link } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YoutubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.footer}>
        <div className={classes.flexContainer} style={{ flexWrap: "wrap" }}>
          <div
            className={classes.flexbox}
            style={{ flexGrow: "1", flex: "auto", flexDirection: "row" }}
          >
            <Typography align="center">
              <Link href="#" color="inherit">
                <img className={classes.image1} src={logo} alt="BookXchanger" />
              </Link>
              <br />
              <Typography
                style={{ fontSize: "15px", fontWeight: "bold", color: "white" }}
                align="center"
              >
                Ensuring access to to everyone.
              </Typography>
            </Typography>
          </div>

          <div
            className={classes.flexbox}
            style={{ flexGrow: "1", color: "white" }}
          >
            <Typography className={classes.touch} align="center">
              Get in Touch
              <br />
            </Typography>
            <Typography align="center">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                color="inherit"
              >
                <FacebookIcon className={classes.Icon} />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                color="inherit"
              >
                <InstagramIcon className={classes.Icon} />
              </Link>
              <Link href="https://youtube.com/" target="_blank" color="inherit">
                <YoutubeIcon className={classes.Icon} />
              </Link>
              <Link href="http://twitter.com/" target="_blank" color="inherit">
                <TwitterIcon className={classes.Icon} />
              </Link>
              <Link
                href="mailto:segroup17@gmail.com"
                target="_blank"
                color="inherit"
              >
                <EmailIcon className={classes.Icon} />
              </Link>
            </Typography>
          </div>

          <div className={classes.flexbox} style={{ flexGrow: "1" }}>
            <Typography
              style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
              align="center"
            >
              Quick Links
            </Typography>
            <Typography align="center">
              <li style={{ listStyleType: "none", textAlign: "center" }}>
                <ul className={classes.link}>
                  <Link
                    to="/"
                    component={RouterLink}
                    key="Home"
                    color="inherit"
                    className={classes.linkName}
                  >
                    Home
                  </Link>
                </ul>
                <ul className={classes.link}>
                  <Link
                    to="/"
                    component={RouterLink}
                    key="dashboard"
                    color="inherit"
                    className={classes.linkName}
                  >
                    DashBoard
                  </Link>
                </ul>
                <ul className={classes.link}>
                  <Link
                    to="/"
                    component={RouterLink}
                    key="About Us"
                    color="inherit"
                    className={classes.linkName}
                  >
                    Register
                  </Link>
                </ul>
              </li>
            </Typography>
          </div>
        </div>

        <div>
          <Typography
            align="center"
            style={{
              fontSize: "13px",
              position: "Centre",
              padding: "5px 0 5px 0",
              background: "black",
              color: "white",
            }}
          >
            {"Copyright © "}
            <Link
              color="inherit"
              to="/"
              component={RouterLink}
              key="Home"
              className={classes.name}
            >
              DriVehicle
            </Link>{" "}
            {new Date().getFullYear()}
            {". "}
            {"All Rights Reserved"}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Footer;

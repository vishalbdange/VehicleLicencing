import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  footer: {
    position: "center",
    background: "#0e153a",
  },

  flexContainer: {
    display: "flex",
    flexFlow: "row nowrap",
    background: "#0e153a",
    padding: "30px 0px 10px 0px",
    justifyContent: "center",
    alignItems: "center",
  },

  flexbox: {
    width: "33%",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  image1: {
    width: "300px",
    margin: "5px 0px 15px 0px ",
    position: "centre",
    transition: ".5s",
    "&:hover": {
      transform: "scale(1.3)",
    },
  },

  link: {
    listStyleType: "none",
    textAlign: "center",
    paddingInlineStart: "0px",
    transition: "1s",
  },

  linkName: {
    color: "white",
    transition: "0.5s",
    "&:hover": {
      color: "#E2F0F9",
      textShadow: "0 0 5px #E2F0F9",
    },
  },

  name: {
    color: "#22d1ee",
    "&:hover": {
      color: "#E2F0F9",
    },
  },

  touch: {
    fontSize: "25px",
    fontWeight: "bold",
    padding: "0 0 30px 0",
    "@media (max-width : 700px)": {
      padding: "10px 0 5px 0",
    },
  },

  Icon: {
    margin: "10px 10px 10px 10px",
    fontSize: "40px",
    transform: "scale(.9)",
    zIndex: "-1",
    transition: ".5s",
    "&:hover::before": {
      transform: "scale(1.1)",
    },

    "&:hover": {
      color: "#eae7dc",
      textShadow: "0 0 5px #eae7dc",
      transform: "scale(1.3)",
    },
    "@media (max-width : 700px)": {
      margin: "0px 10px 10px 10px",
    },
  },

  displayInline: {
    display: "inline",
  },
}));
export default styles;
import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  Main: {
    background: "#FFFAFA",
  },

  name: {
    paddingTop: "15px",
    alignContent: "center",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    background: "rgb(2,0,36)",
    background:
      "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(14,21,58,1) 50%, rgba(34,209,238,1) 100%)",
    "@media (max-width : 700px)": {
      margin: "5px auto",
    },
  },

  content: {
    textAlign: "center",
    color: "black",
    "@media (max-width : 700px)": {
      textAlign: "center",
      fontSize: "35px",
    },
  },
  contentBold: {
    display: "inline-block",
    background: "-webkit-linear-gradient(#0e153a, #3d5af1)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    textAlign: "center",
    "@media (max-width : 700px)": {
      textAlign: "center",
      top: "30%",
      left: "50%",
      fontSize: "35px",
    },
  },

  main1: {
    display: "flex",
    "@media (max-width : 700px)": {
      display: "inline",
    },
  },

  contenttext: {
    textAlign: "center",
    margin: "0px 200px",
    "@media (max-width : 700px)": {
      margin: "0px 50px",
    },
  },
}));

export default styles;

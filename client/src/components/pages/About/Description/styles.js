import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  paper: {
    border: "5px solid #000WWW",
    backgroundSize: "cover",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    marginLeft: "0px",
    marginRight: "0px",
    overflow: "none",
    width: "100%",
    zIndex: "10",
    transform: "translateY(10%,0%)",
    "@media (max-width : 700px)": {
      height: "600px",
    },
  },
  content: {
    textAlign: "center",
    zIndex: "10",
    fontSize: "20px",
    fontWeight: "400",
    fontFamily: "Roboto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "#eae7dc",
    "@media (max-width : 700px)": {
      fontSize: "50px",
    },
  },

  text: {
    "@media (max-width : 700px)": {
      fontSize: "50px",
    },
  },

  smallText: {
    "@media (max-width : 700px)": {
      fontSize: "18px",
    },
  },

  contentBold: {
    background:
      "linear-gradient(356deg, rgba(226,243,245,1) 0%, rgba(34,209,238,1) 73%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: "130px",
    "@media (max-width : 700px)": {
      textAlign: "center",
      top: "30%",
      left: "50%",
      fontSize: "70px",
    },
  },
  parent: {
    width: "100%",
  },
}));

export default styles;

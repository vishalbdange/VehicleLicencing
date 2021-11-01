import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  bottom: {
    display: "flex",
    background: "#FFFAFA",
    paddingBottom: "20px",
    "@media (max-width : 700px)": {
      display: "inline",
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

  left: {
    width: "50%",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  right: {
    width: "50%",
    margin: "0 10px",
    "@media (max-width : 700px)": {
      width: "90%",
      margin: "0 10px",
    },
  },

  inline: {
    display: "inline",
  },

  listItem: {
    paddingTop: "0px",
    paddingBottom: "0px",
    "@media (max-width : 700px)": {
      paddingLeft: "0px",
    },
  },

  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#e98074",
    width: "300px",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "#e85a4f",
    },
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },
}));

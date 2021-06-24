//styles sheet
import { makeStyles } from "@material-ui/core";
import bannerImg from "./gradient.jpeg";

const useStyles = makeStyles({
  root: {
    flexFlow: "column",
    alignItems: "center",
    height: "100vh",
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover"
  },
  paper: {
    width: "30%",
    margin: "12%",
    border: "1px solid yellow",
    padding: "1%",
    // Gradient for div
    background: "linear-gradient(20deg, #FAA0A0 10%, #D70040 90%)",
    boxShadow: "5px 4px 5px 4px rgba(227, 11, 92, .3)",
    borderRadius: "20px",
    // flex: "auto",
  },
  paperItem: {
    border: "1px solid blue",
    fontWeight: "bold",
    color: "#fff",
    marginTop: "7%",
    marginBottom: "2%"
  },
  topText: {
    width: "100%",
    textAlign: "center"
  },
  formGrid: {
    flexFlow: "column",
    alignItems: "center"
  },
  login: {
    color: "red",
    marginTop: "1%",
    marginBottom: "1%"
  },

  signUp: {
    color: "red",
    marginTop: "7%",
    marginBottom: "2%"
  },
  haveAccount: {
    flexFlow: "column wrap",
    alignItems: "center"
  }
});

export default useStyles;

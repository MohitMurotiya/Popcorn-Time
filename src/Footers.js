import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    textAlign: "center",
    backgroundColor: "#111",
    color: "#fff",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <h1>&copy; {new Date().getFullYear()}: Made By Mohit Murotiya</h1>
      </footer>
    </div>
  );
};

export default Footer;

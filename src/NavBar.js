import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import LoginForm from "./LoginForm";

const useStyles = makeStyles((theme) => ({
  loginBtn: {
    marginRight: "10px",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const getModalStyle = () => {
    const top = 50;
    const left = 50;
  
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-${top}%, -${left}%)`,
      width: '400px'
    };
  };

const NavBar = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          color="inherit"
          className={classes.loginBtn}
          onClick={handleOpen}
        >
          Login
        </Button>
        <Modal open={open} onClose={handleClose}>
            <div style={modalStyle} className={classes.paper}>
                <LoginForm />
            </div>
         
        </Modal>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

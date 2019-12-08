import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  navColor: {
    color: "white"
  },
  navStyle: {
    textDecoration: "none"
  },
  sideColor: {
    color: "black"
  }
}));

function Newmenu() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link to="/" color="inherit" className={classes.navStyle}>
          <ListItem button>
            <ListItemText className={classes.sideColor}>Home</ListItemText>
          </ListItem>
        </Link>
        <Link to="/about" color="inherit" className={classes.navStyle}>
          <ListItem button>
            <ListItemText className={classes.sideColor}>About</ListItemText>
          </ListItem>
        </Link>
        <Link to="/contact" color="inherit" className={classes.navStyle}>
          <ListItem button>
            <ListItemText className={classes.sideColor}>Contact</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className={classes.navColor}
            >
              WEBLY
            </Link>
          </Typography>
          <Link to="/login" color="black" className={classes.navStyle}>
            <Button className={classes.navColor}>Login</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {sideList("left")}
      </SwipeableDrawer>
    </div>
  );
}

export default Newmenu;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/img/heal-music-logo.png";
import {
  Box,
  ButtonBase,
  Grid,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompactDisc,
  faMicrophone,
  faListAlt,
  faMusic,
  faStore,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  logo: {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    padding: theme.spacing(6, 0, 2, 4),
    marginBottom: theme.spacing(3),
  },
  img: {

  },
  item: {
    padding: "8px 0px !important",
  },
  title: {
    paddingLeft: theme.spacing(6),
    marginBottom: theme.spacing(0.5),
  },
  btn: {
    width: "100%",
    "&:focus": {
      transition: "all 0.5s",
      background: "linear-gradient(90deg, rgba(250,0,200,0.5) 0%, rgba(250,250,250,0) 50%)"
    }
  },
  btnContent: {
    padding: theme.spacing(1, 0),
  },
}));

const sideBarArr = {
  library: {
    title: "library",
    data: [
      { title: "home", icon: faHome },
      { title: "Playlists", icon: faCompactDisc },
      { title: "Artists", icon: faMicrophone },
      { title: "Albums", icon: faListAlt },
      { title: "Songs", icon: faMusic },
    ],
  },
  discover: {
    title: "Discover",
    data: [
      { title: "Music Store", icon: faStore },
      { title: "Setting", icon: faCog },
    ],
  },
};

const SideBar = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.logo}>
        <img className={classes.img} width="200px" src={logo} alt="logo" />
      </div>
      <div style={{ marginBottom: 30 }}>
        <Typography color="secondary" variant="body1" className={classes.title}>
          <Box fontWeight="700" fontSize="18px">
            {sideBarArr.library.title}
          </Box>
        </Typography>
        <List>
          {sideBarArr.library.data.map((item, index) => {
            return (
              <ListItem key={index} className={classes.item}>
                <ButtonBase className={classes.btn} disableRipple disableTouchRipple>
                  <Grid container justify="center" alignItems="center" className={classes.btnContent}>
                    <Grid item xs={2}>
                      <FontAwesomeIcon
                        icon={item.icon}
                        size="lg"
                        color="#ffffff"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography component="div" variant="body1" align="left">
                        <Box color="text.main">{item.title}</Box>
                      </Typography>
                    </Grid>
                  </Grid>
                </ButtonBase>
              </ListItem>
            );
          })}
        </List>
      </div>
      <div>
        <Typography color="secondary" variant="body1" className={classes.title}>
          <Box fontWeight="700" fontSize="18px">
            Discover
          </Box>
        </Typography>
        <List className={classes.list}>
          {sideBarArr.discover.data.map((item, index) => {
            return (
              <ListItem key={index} className={classes.item}>
                <ButtonBase className={classes.btn} disableRipple disableTouchRipple>
                  <Grid container justify="center" alignItems="center" className={classes.btnContent}>
                    <Grid item xs={2}>
                      <FontAwesomeIcon icon={item.icon} size="lg" color="#ffffff" />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography component="div" variant="body1"  align="left">
                        <Box color="text.main">{item.title}</Box>
                      </Typography>
                    </Grid>
                  </Grid>
                </ButtonBase>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default SideBar;

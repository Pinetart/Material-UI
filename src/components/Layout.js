import {
  AppBar,
  Avatar,
  Drawer,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { format } from "date-fns";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      paddingTop: 30,
      paddingBottom: 30,
    },
    drawer: { width: drawerWidth },
    drawerPaper: { width: drawerWidth },
    root: { display: "flex" },
    active: {
      background: "#D3D3D3",
    },
    title: {
      textAlign: "center",
      paddingTop: 15,
      PaddingBottom: 30,
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: { flexGrow: 1 },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      {/* Left Drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Notes
          </Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => {
                history.push(item.path);
              }}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* App Bar */}
      <AppBar elevation={0} className={classes.appbar} color="text.primary">
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar className={classes.avatar} src="/mario-av.png" />
        </Toolbar>
      </AppBar>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;

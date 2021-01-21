import React from 'react';
import Logo from '../../images/logo.svg'
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CreateIcon from '@material-ui/icons/Create';
import PersonIcon from '@material-ui/icons/Person';
import TimelineIcon from '@material-ui/icons/Timeline';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        color: '#912c31'
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
        },
    },
    appBar: {
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black !important',
        textDecoration: 'none !important',
    },
    logoSmUp: {
      minHeight: 120
    },
    logoHead: {
        lineHeight: '24px',
        fontSize: '24px',
        fontWeight: 200,
        color: '#912c31',
    },
    logoSub: {
        lineHeight: '24px',
        fontSize: '14px',
        fontWeight: 200 
    },
    link: {
        color: 'black !important',
        textDecoration: 'none !important',
        paddingTop: '8px !important',
        paddingBottom: '8px !important',
        paddingLeft: '16px !important',
        paddingRight: '16px !important',
        textDecoration: 'none !important',
    },
    selectedItemStyle: {
        backgroundColor: 'red'
    }
}));

function ListItemLink(props) {
    const { to } = props;

    const CustomLink = React.useMemo(
      () =>
        React.forwardRef((linkProps, ref) => (
          <Link to={to} {...linkProps} />
        )),
      [to],
    );

    return <ListItem button component={CustomLink} {...props} />;
  }

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
        <Hidden smDown implementation="css">
        <a id="logo-block" aria-label="Move to top of the page" href="#page-top" className={`${classes.logo} ${classes.logoSmUp}`}>
            <Grid container justify="center" spacing={0}>
                <Grid item xs={12} className={classes.logoHead}>
                    Jan Bremauer
                </Grid>
                <Grid item className={classes.logoSub}>
                    <img src={Logo} width="22" height="22" alt="Logo" /> Personal Homepage
                </Grid>
            </Grid>
        </a>
        <Divider />
        </Hidden>
        <List>
            <ListItemLink 
            button 
            className={classes.link}
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}
            to="/#about">
                <ListItemIcon><PersonIcon/></ListItemIcon>
                <ListItemText primary="About"/>
            </ListItemLink>
            <ListItemLink 
            button 
            className={classes.link}
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
            to="/#skills">
                <ListItemIcon><BarChartIcon/></ListItemIcon>
                <ListItemText primary="Skills"/>
            </ListItemLink>
            <ListItemLink 
            button 
            className={classes.link}
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
            to="/#experience">
                <ListItemIcon><TimelineIcon/></ListItemIcon>
                <ListItemText primary="Experience"/>
            </ListItemLink>
            <ListItemLink 
            button 
            className={classes.link}
            selected={selectedIndex === 4}
            onClick={event => handleListItemClick(event, 4)}
            to="/#projects">
                <ListItemIcon><EmojiObjectsIcon/></ListItemIcon>
                <ListItemText primary="Projects"/>
            </ListItemLink>
            <ListItemLink 
            button 
            className={classes.link}
            selected={selectedIndex === 5}
            onClick={event => handleListItemClick(event, 5)}
            to="/#blog">
                <ListItemIcon><CreateIcon/></ListItemIcon>
                <ListItemText primary="Blog"/>
            </ListItemLink>
            <ListItemLink 
            button 
            className={classes.link}
            selected={selectedIndex === 6}
            onClick={event => handleListItemClick(event, 6)}
            to="/#contact">
                <ListItemIcon><MailIcon/></ListItemIcon>
                <ListItemText primary="Contact"/>
            </ListItemLink>
            <ListItemLink 
            button 
            className={classes.link}
            selected={selectedIndex === 7}
            onClick={event => handleListItemClick(event, 7)}
            to="/imprint">
                <ListItemIcon><AssignmentIcon/></ListItemIcon>
                <ListItemText primary="Imprint"/>
            </ListItemLink>
        </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Hidden mdUp implementation="css">
        <AppBar position="fixed" color='inherit' className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <div style={{ 
                    marginLeft  : 'auto',
                    marginRight : 'auto'
                }}>
                  <a id="logo-block" aria-label="Move to top of the page" href="#page-top" className={classes.logo}>
                    <Grid container justify="center" spacing={0}>
                        <Grid item xs={12} className={classes.logoHead}>
                            Jan Bremauer
                        </Grid>
                        <Grid item className={classes.logoSub}>
                            <img src={Logo} width="22" height="22" alt="Logo" /> Personal Homepage
                        </Grid>
                    </Grid>
                  </a>
            </div>
          </Toolbar>
        </AppBar>
      </Hidden>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;
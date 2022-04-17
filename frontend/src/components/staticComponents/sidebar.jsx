import React from 'react';
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
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import Logo from '../../images/logo.svg';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ListItemLink(props) {
  const { to } = props;

  const DefaultLink = React.forwardRef((linkProps, ref) => (
    <Link smooth to={to} {...linkProps} ref={ref} />
  ));

  if (checkMobile()) {
    const MobileLink = React.forwardRef((linkProps, ref) => (
      <Link
        smooth
        to={to}
        scroll={(el) => scrollWithOffset(el, 76)}
        {...linkProps}
        ref={ref}
      />
    ));
    MobileLink.displayName = 'MobileLink';
    return <ListItem button component={MobileLink} {...props} />;
  }
  DefaultLink.displayName = 'DefaultLink';
  return <ListItem button component={DefaultLink} {...props} />;
}

function ResponsiveDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Hidden mdDown implementation='css'>
        <Link
          id='logo-block'
          smooth
          aria-label='Move to top of the page'
          to='#'
          className='logo logoMdDown'
        >
          <Grid container justifyContent='center' spacing={0}>
            <Grid item xs={12} className='logoHead'>
              Jan Bremauer
            </Grid>
            <Grid item className='logoSub'>
              <img src={Logo} width='22' height='22' alt='Logo' /> Personal
              Homepage
            </Grid>
          </Grid>
        </Link>
        <Divider />
      </Hidden>
      <List>
        <ListItemLink
          button
          className='link'
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          to='#about'
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary='About' />
        </ListItemLink>
        <ListItemLink
          button
          className='link'
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          to='#skills'
        >
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary='Skills' />
        </ListItemLink>
        <ListItemLink
          button
          className='link'
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
          to='#experience'
        >
          <ListItemIcon>
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary='Experience' />
        </ListItemLink>
        <ListItemLink
          button
          className='link'
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
          to='#projects'
        >
          <ListItemIcon>
            <EmojiObjectsIcon />
          </ListItemIcon>
          <ListItemText primary='Projects' />
        </ListItemLink>
        <ListItemLink
          button
          className='link'
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
          to='#blog'
        >
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary='Blog' />
        </ListItemLink>
        <ListItemLink
          button
          className='link'
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
          to='#contact'
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary='Contact' />
        </ListItemLink>
        <ListItemLink
          button
          className='link'
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
          to='/imprint#'
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary='Imprint' />
        </ListItemLink>
      </List>
    </div>
  );

  return (
    <div className='sbRoot'>
      <CssBaseline />
      <Hidden lgUp implementation='css'>
        <AppBar position='fixed' color='inherit' className={classes.appBar}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <div
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Link
                id='logo-block'
                smooth
                aria-label='Move to top of the page'
                to='#'
                className='logo'
              >
                <Grid container justifyContent='center' spacing={0}>
                  <Grid item xs={12} className='logoHead'>
                    Jan Bremauer
                  </Grid>
                  <Grid item className='logoSub'>
                    <img src={Logo} width='22' height='22' alt='Logo' />{' '}
                    Personal Homepage
                  </Grid>
                </Grid>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Hidden>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden lgUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: 'drawerPaper',
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ListItemLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default ResponsiveDrawer;
